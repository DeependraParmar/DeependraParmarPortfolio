import React from 'react'
import SocialMediaIcons from './SocialMediaIcons'
import { motion } from 'framer-motion'

const animations = {
  footer: {
    initial: {
      y: '50%',
      opacity: 0
    },
    whileInView: {
      y: '0',
      opacity: 1
    },
    transition: {
      delay: 0.2,
      duration: 0.3,
    }
  },
}
export default function Footer() {
  return (
    <motion.footer {...animations.footer} className='footer'>
        <div className='footertext'>
          <p>Deependra Parmar © 2023</p>
        </div>
        <div className='icons'>
          <SocialMediaIcons />
        </div>
    </motion.footer>
  )
}
