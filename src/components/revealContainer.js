import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export default function RevealContainer({ children, width = '100%' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  const boxVariant = {
    hidden: { opacity: 0, y: "75%" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, delay: 0.5 } },
  }

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
      // slideControls.start("visible")
    } else {
      mainControls.start('hidden')
    }
  }, [mainControls, isInView])
  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div variants={boxVariant} initial="hidden" animate={mainControls}>
        {children}
      </motion.div>

      {/* TODO: slide div */}
    </div>
  )
}