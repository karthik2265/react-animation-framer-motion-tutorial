import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Box1() {
  const [isAnimating, setIsAnimating] = useState(false)
  console.log(isAnimating,"isanimating")
  return (
    <div className='box-container'>
      <motion.div
        initial={{
          x: -400,
          opacity: 0.1,
        }}
        animate={{
          x: isAnimating ? 850 : 0,
          opacity: isAnimating ? 1 : 0.45,
          rotate: isAnimating ? 360 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 70,
        }}
        className='box'
        onClick={() => setIsAnimating(!isAnimating)}
      ></motion.div>
    </div>
  )
}

export default Box1
