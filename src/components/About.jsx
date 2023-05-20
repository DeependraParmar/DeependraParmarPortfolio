import React from 'react'
import { motion } from 'framer-motion'
import myimage from '../assets/deependraparmar.jpg'
import aboutme from '../assets/aboutme.svg'
import { Link } from 'react-router-dom'
import { BsRocketTakeoffFill } from "react-icons/bs";
import SocialMediaIcons from './SocialMediaIcons'

export default function About() {
  document.title = "About | Deependra Parmar";
  const animations = {
    head: {
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
    home: {
      initial: {
        opacity: 0
      },
      whileInView: {
        opacity: 1
      },
      transition: {
        duration: 0.9,
        delay: 0.5,
      }
    },
  }
  return (
    <div className='aboutsection'>
      <motion.div {...animations.head} className="head">
        <h1>About Me</h1>
        <img src={aboutme} alt="" />
      </motion.div>


      <motion.div {...animations.home} className="about">
        <img src={myimage} alt="" />
        <div className="content">
          <p>👋 Hello there! I'm <b>Deependra Parmar</b>, a highly passionate and dedicated <b>Full Stack Web Developer</b> with a strong drive for creating beautiful and immersive digital experiences. 💻✨

            I find immense joy in transforming ideas into reality, bringing them to life through elegant design and cutting-edge technology. 🎨💡 My goal is to craft visually stunning and user-friendly interfaces that leave a lasting impression. With a meticulous attention to detail, I strive for pixel-perfection in every line of code. 🌟🔍 <br /> <br />

            Constantly exploring the ever-evolving landscape of web technologies, I stay up-to-date with the latest trends and best practices to deliver modern and engaging websites. 🌐🚀 From responsive layouts to seamless animations, I ensure an exceptional user experience across devices and platforms. 💫📱 <br /><br />

            But it doesn't stop there. I strongly believe in the power of collaboration and effective communication. 🤝💬 I value the insights and perspectives of my clients and colleagues, working closely with them to understand their vision and bring it to fruition. Together, we can create something truly remarkable. 💪🌈 <br /><br />

            When I'm not immersed in coding, you can find me diving deep into the world of design, exploring new techniques and trends to expand my creative horizons. 🎨✨ Fueling my creativity with a cup of coffee in hand, I enjoy brainstorming and conceptualizing innovative solutions for my next project. ☕💡 <br /><br />

            I'm thrilled to embark on this journey with you, turning your ideas into a digital masterpiece. Let's connect and discuss how we can make your online presence shine! 🌟✨</p>
          <SocialMediaIcons />
        </div>
      </motion.div>

      <motion.div {...animations.head} className="collaborate">
        <h1>Let's Collaborate</h1>
        <div className="info">
          <p>Collaboration is the essence of growth and innovation. It is the art of connecting diverse minds, talents, and perspectives towards a common goal. When we come together, we unlock new realms of creativity, solve complex problems with ease, and achieve greater impact. Let's collaborate and connect to make a difference that resonates far beyond our individual contributions.</p>
          <Link to={'/contact'}>Let's Connect  <BsRocketTakeoffFill /> </Link>
        </div>
      </motion.div>
    </div>
  )
}
