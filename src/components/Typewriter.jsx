import { useState, useEffect } from 'react'

const PALABRAS = [
  'Community Manager',
  'Estratega digital',
  'Experto en Meta Ads',
  'Creador con IA',
  'Diseñador de marcas',
]

export default function Typewriter() {
  const [texto, setTexto] = useState('')
  const [indice, setIndice] = useState(0)
  const [escribiendo, setEscribiendo] = useState(true)
  const [cursor, setCursor] = useState(true)

  // Parpadeo del cursor
  useEffect(() => {
    const t = setInterval(() => setCursor((c) => !c), 530)
    return () => clearInterval(t)
  }, [])

  // Lógica typewriter
  useEffect(() => {
    const palabra = PALABRAS[indice]

    if (escribiendo) {
      if (texto.length < palabra.length) {
        const t = setTimeout(() => setTexto(palabra.slice(0, texto.length + 1)), 70)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setEscribiendo(false), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (texto.length > 0) {
        const t = setTimeout(() => setTexto(texto.slice(0, -1)), 40)
        return () => clearTimeout(t)
      } else {
        setIndice((i) => (i + 1) % PALABRAS.length)
        setEscribiendo(true)
      }
    }
  }, [texto, escribiendo, indice])

  return (
    <span className="inline-flex items-center gap-1">
      <span className="text-acento font-semibold">{texto}</span>
      <span
        className="inline-block w-0.5 h-5 bg-acento rounded-full"
        style={{ opacity: cursor ? 1 : 0, transition: 'opacity 0.1s' }}
      />
    </span>
  )
}
