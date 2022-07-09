import React from 'react'
import { motion } from 'framer-motion'

function Box4() {
  return (
    <div className='box-container'>
      <motion.div
        className='box'
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          rotate: [0, 0, 180, 0, 0],
          borderRadius: ['15%', '15%', '50%', '15%', '15%'],
        }}
        transition={{
          duration: 2,
        }}
      ></motion.div>
    </div>
  )
}

export default Box4
