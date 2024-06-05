import React from 'react'
import { motion } from 'framer-motion'

function B_Assign2() {
  return (
    <motion.div 
    className='w-40 h-40 bg-white/80'
    animate={{
        scale: [1, 2,1],
        borderRadius : ["0%", "50%", "0%"],
        rotate: [0, 180, 0]
    }}
    transition={{
        duration: 2,
        repeat: Infinity
    }}
    ></motion.div>
  )
}

export default B_Assign2