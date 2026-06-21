import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CursorCustom() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 })
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    // Solo en desktop
    if (window.innerWidth < 768) return

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      // Trail con leve delay (se actualiza en requestAnimationFrame)
      requestAnimationFrame(() => setTrailPos({ x: e.clientX, y: e.clientY }))
    }

    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    const onHoverIn = (e) => {
      if (e.target.closest('a, button, [role="button"]')) setHovering(true)
    }
    const onHoverOut = () => setHovering(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseover', onHoverIn)
    document.addEventListener('mouseout', onHoverOut)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseover', onHoverIn)
      document.removeEventListener('mouseout', onHoverOut)
    }
  }, [])

  // No renderizar en mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null

  return (
    <>
      {/* Cursor principal */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: pos.x - (hovering ? 20 : 6),
          y: pos.y - (hovering ? 20 : 6),
          width: hovering ? 40 : 12,
          height: hovering ? 40 : 12,
          scale: clicking ? 0.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.5 }}
        style={{ position: 'fixed' }}
      >
        <div
          className="w-full h-full rounded-full bg-acento"
          style={{ opacity: hovering ? 0.6 : 1 }}
        />
      </motion.div>

      {/* Trail / halo */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        animate={{
          x: trailPos.x - 20,
          y: trailPos.y - 20,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 0.8 }}
        style={{ position: 'fixed' }}
      >
        <div className="w-10 h-10 rounded-full border border-acento/30" />
      </motion.div>
    </>
  )
}
