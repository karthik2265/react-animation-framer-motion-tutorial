import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Box2() {
  return (
    <div className='box-container'>
      <motion.div
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        drag={true}
        transition={{
          duration: 0.15,
        }}
        className='box'
      ></motion.div>
    </div>
  )
}

export default Box2
