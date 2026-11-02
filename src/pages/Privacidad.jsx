import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Eyebrow, GridGlow } from '../components/home/ui'

// Política de privacidad: qué datos junta la web, para qué, dónde se guardan y cómo pedir que se borren.
// Ley 25.326 de Protección de Datos Personales (Argentina). Si se suma un formulario o un servicio nuevo, actualizar acá.
const ACTUALIZADA = '2 de noviembre de 2026'

const secciones = [
  {
    titulo: 'Quién es responsable de tus datos',
    texto: [
      'Juan Gallino, a cargo de JuanoConecta, Rafaela, Santa Fe, Argentina. Para cualquier consulta sobre tus datos escribime a juanoconecta@gmail.com o por WhatsApp al +54 9 3492 383024.',
    ],
  },
  {
    titulo: 'Qué datos junta la web y para qué',
    lista: [
      ['Material gratis', 'tu correo, para mandarte el material y algunos mails de seguimiento. Podés darte de baja cuando quieras.'],
      ['Formulario de contacto, lista de espera del curso y encuestas', 'tu nombre, tu WhatsApp o correo y lo que nos cuentes, para responderte.'],
      ['Opiniones', 'tu nombre, tu negocio y tu comentario se publican en la web. El contacto que dejes no se publica.'],
      ['Compras', 'los datos que cargás en Mercado Pago o Gumroad (nombre, correo y monto), para registrar la venta y coordinar el trabajo. Los datos de tu tarjeta nunca pasan por esta web.'],
      ['Medición', 'qué páginas se visitan y en qué botones se hace clic, sin datos personales, para saber qué funciona. Usamos Google Analytics y el píxel de Meta, que ponen cookies propias.'],
    ],
  },
  {
    titulo: 'Dónde se guardan',
    texto: [
      'En servicios que cumplen normas internacionales de seguridad (SOC 2 o ISO 27001): Vercel (la web), Supabase (la base de datos, con acceso cerrado y cifrado), Resend (envío de mails) y Formspree (formulario de contacto). Algunos de estos servidores están fuera de Argentina.',
      'Solo Juan accede al panel donde se ven los datos, con contraseña. No vendemos ni compartimos tus datos con nadie para publicidad.',
    ],
  },
  {
    titulo: 'Cuánto tiempo los guardamos',
    texto: [
      'Mientras sirvan para responderte o para el trabajo que hacemos juntos. Si pasan dos años sin contacto, los borramos. Los datos de ventas se guardan el tiempo que pide la ley contable.',
    ],
  },
  {
    titulo: 'Tus derechos',
    texto: [
      'Podés pedir ver qué datos tenemos tuyos, corregirlos o borrarlos, escribiendo a juanoconecta@gmail.com. Te respondemos en un plazo de 10 días hábiles para verlos y de 5 días hábiles para corregirlos o borrarlos, como marca la Ley 25.326. Ver tus datos es gratis cada seis meses.',
      'La Agencia de Acceso a la Información Pública, órgano de control de la Ley 25.326, atiende las denuncias y los reclamos por incumplimiento de las normas sobre protección de datos personales.',
    ],
  },
]

export default function Privacidad() {
  return (
    <div className="bg-fondo text-crema min-h-screen">
      <Helmet>
        <title>Política de privacidad | JuanoConecta</title>
        <meta name="description" content="Qué datos junta la web de JuanoConecta, para qué los usamos, dónde se guardan y cómo pedir verlos o borrarlos." />
        <link rel="canonical" href="https://juanoconecta.ar/privacidad" />
      </Helmet>

      <Navbar />

      <section className="pt-40 pb-12 px-6 relative overflow-hidden">
        <GridGlow />
        <div className="relative max-w-3xl mx-auto">
          <Eyebrow>Tus datos</Eyebrow>
          <h1 className="text-4xl md:text-5xl font-bold text-crema mt-6 mb-4 leading-[1.05] tracking-tight">Política de privacidad</h1>
          <p className="text-crema/50 text-lg leading-relaxed">Lo que nos dejás en esta web lo cuidamos como si fuera nuestro. Acá te contamos qué guardamos, para qué y cómo pedir que lo borremos.</p>
          <p className="text-crema/35 text-sm mt-4">Última actualización: {ACTUALIZADA}</p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {secciones.map((s) => (
            <div key={s.titulo}>
              <h2 className="text-2xl font-bold text-crema mb-4">{s.titulo}</h2>
              {s.texto?.map((p) => <p key={p} className="text-crema/60 leading-relaxed mb-4">{p}</p>)}
              {s.lista && (
                <ul className="space-y-3">
                  {s.lista.map(([k, v]) => (
                    <li key={k} className="text-crema/60 leading-relaxed"><span className="text-crema font-semibold">{k}:</span> {v}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
