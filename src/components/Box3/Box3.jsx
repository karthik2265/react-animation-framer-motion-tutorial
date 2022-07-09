import React from 'react'
import { motion } from 'framer-motion'

function Box3() {
  const boxVariants = {
    hidden: {
      x: '-100vh',
    },
    visible: {
      x: 0,
      transition: {
        delay: 2,
        when: 'beforeChildren',
        staggerChildren: 0.9,
      },
    },
  }
  const subBoxVariants = {
    hidden: {
      x: '-100vh',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  }
  return (
    <div className='box-container'>
      <motion.div
        variants={boxVariants}
        initial='hidden'
        animate='visible'
        className='box'
      >
        {[1, 2, 3].map((boxNum) => (
          <motion.div variants={subBoxVariants} className='box-item' />
        ))}
      </motion.div>
    </div>
  )
}

export default Box3
