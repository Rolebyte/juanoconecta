// Genera un HTML con el contenido ya escrito para cada página pública, así los buscadores
// y los bots de IA (que en general no ejecutan JavaScript) leen el texto completo.
// React igual toma la página al cargar en el navegador.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(raiz, 'dist')
const { render } = await import(path.join(raiz, 'dist-ssr', 'entry-server.js'))

const RUTAS = [
  '/',
  '/community-manager-rafaela',
  '/redes-sociales-para-negocios-rafaela',
  '/publicidad-instagram-rafaela',
  '/marketing-digital-rafaela',
  '/sobre-juanoconecta',
  '/curso-ia',
  '/tienda',
  '/capacitaciones',
  '/navidad',
  '/verano',
]

const plantilla = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
// La plantilla vacía queda como respaldo para las rutas que no se prerenderizan (vercel.json).
fs.writeFileSync(path.join(dist, 'spa.html'), plantilla)

// Saca de la plantilla las etiquetas que la página define con Helmet, para no duplicarlas.
function limpiarHead(html, helmetHead) {
  let out = html
  if (/<title[^>]*>[^<]+<\/title>/.test(helmetHead)) out = out.replace(/<title>[\s\S]*?<\/title>\s*/, '')
  for (const [attr, nombre] of [
    ['name', 'description'], ['name', 'keywords'],
    ['property', 'og:title'], ['property', 'og:description'], ['property', 'og:url'], ['property', 'og:image'], ['property', 'og:type'],
    ['name', 'twitter:title'], ['name', 'twitter:description'],
  ]) {
    if (helmetHead.includes(`${attr}="${nombre}"`)) {
      out = out.replace(new RegExp(`<meta ${attr}="${nombre}"[^>]*>\\s*`), '')
    }
  }
  if (helmetHead.includes('rel="canonical"')) out = out.replace(/<link rel="canonical"[^>]*>\s*/, '')
  // Si la página no define sus Open Graph, usa su propio título y URL en vez de los de la home.
  const titulo = helmetHead.match(/<title[^>]*>([^<]*)<\/title>/)?.[1]
  const canonical = helmetHead.match(/rel="canonical" href="([^"]*)"/)?.[1]
  if (titulo) {
    out = out.replace(/(<meta property="og:title" content=")[^"]*/, `$1${titulo}`)
    out = out.replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${titulo}`)
  }
  if (canonical) out = out.replace(/(<meta property="og:url" content=")[^"]*/, `$1${canonical}`)
  return out
}

for (const ruta of RUTAS) {
  const { html, helmet } = render(ruta)
  const head = helmet
    ? [helmet.title, helmet.meta, helmet.link, helmet.script].map((h) => h.toString()).join('\n    ').replace(/<title[^>]*><\/title>/, '')
    : ''
  let pagina = limpiarHead(plantilla, head)
  pagina = pagina.replace('</head>', `    ${head}\n  </head>`)
  pagina = pagina.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  const destino = ruta === '/' ? path.join(dist, 'index.html') : path.join(dist, ruta.slice(1), 'index.html')
  fs.mkdirSync(path.dirname(destino), { recursive: true })
  fs.writeFileSync(destino, pagina)
  console.log(`prerender ${ruta} (${Math.round(html.length / 1024)} KB)`)
}

fs.rmSync(path.join(raiz, 'dist-ssr'), { recursive: true, force: true })
