import React from 'react'
import svg from "../assets/developer.svg"
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import SocialMediaIcons from './SocialMediaIcons'
import wave from '../assets/wave.svg'
import Skills from './Skills'
import Testimonial from './Testimonial'

export default function Home() {
  const animations = {
    div: {
      initial: {
        y: '100%',
        opacity: 0
      },
      whileInView: {
        y: '0',
        opacity: 1
      },
      transition: {
        duration: 0.5,
      }
    },
    headdiv: {
      initial: {
        y: '100%',
        opacity: 0
      },
      whileInView: {
        y: '0',
        opacity: 1
      },
      transition: {
        duration: 0.5,
        delay: 0.5,
      }
    },
    home: {
      initial: {
        opacity: 0
      },
      whileInView: {
        opacity: 1
      },
      transition: {
        duration: 0.8,
      }
    },
  }

  return (
    <>
      <motion.div {...animations.home} className='homecontainer'>
        <div className='content'>
          <motion.h1 {...animations.headdiv}>
            Hi, I am <br />
            <span>Deependra Parmar</span>
          </motion.h1>
          <Typewriter options={{
            strings: [" A Developer🔥", " A Designer✨", " A Creator💖", " An Educator🌈"],
            autoStart: true,
            loop: true,
            cursor: "",
            wrapperClassName: 'typewriterpara'
          }} />



          <div className='content-rest'>
            <p>Building Engaging Experiences, Inspiring Authenticity, and Empowering Positive Change through Thoughtful Design.....</p>
            <div className="homebuttons">
              <ul>
                <li><a href="mailto:deependraparmar1@gmail.com" target='_blank' rel='noopener noreferrer'>Hire Me</a></li>
                <li><a href="https://www.buymeacoffee.com/deependraparmar" target='_blank' rel='noopener noreferrer' className='solid'>Buy me a Coffee	&#9749;</a></li>
              </ul>
            </div>
          </div>


          <SocialMediaIcons />
        </div>


        <div className='image'>
          <img src={svg} alt="Developer here" />
        </div>

      </motion.div>

      <div className="wave">
        <img src={wave} alt="" />
      </div>

      {/* skills section  */}
      <Skills />


      {/* Testimonial section  */}
      <Testimonial />
    </>
  )
}
