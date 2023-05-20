import React from 'react'
import { TbWorldWww } from 'react-icons/tb'
import { FaShoppingCart, FaSearch } from 'react-icons/fa'
import { GiFlowerPot } from 'react-icons/gi'
import { MdOutlineContentPaste } from 'react-icons/md'
import { BiSupport } from 'react-icons/bi'
import { BsPeopleFill } from 'react-icons/bs'
import { HiSpeakerphone } from 'react-icons/hi'
import { SiMicrostrategy } from 'react-icons/si'
import servicesimage from "../assets/services.svg";
import { motion } from 'framer-motion'
import { MdWork } from 'react-icons/md'

export default function Services() {
  document.title = "Services | Deependra Parmar";
  const services = [
    {
      icon: <TbWorldWww />,
      title: "Web Development",
      description: "Offer professional website development services, creating responsive and user-friendly websites tailored to clients' needs."
    },
    {
      icon: <FaShoppingCart />,
      title: "E-commerce Solutions",
      description: "Provide end-to-end e-commerce solutions, helping businesses establish and optimize their online stores for maximum sales and customer satisfaction."
    },
    {
      icon: <GiFlowerPot />,
      title: "UI/UX Design",
      description: "Create visually stunning and intuitive user interfaces (UI) with a focus on delivering exceptional user experiences (UX)."
    },
    {
      icon: <MdOutlineContentPaste />,
      title: "Content Management Systems",
      description: "Build custom content management systems (CMS) that allow clients to easily manage and update their website content."
    },
    {
      icon: <BiSupport />,
      title: "Website Maintenance and Support",
      description: "Offer comprehensive website maintenance and support services, ensuring websites are secure, up-to-date, and performing optimally."
    },
    {
      icon: <FaSearch />,
      title: "Search Engine Optimization",
      description: "Provide SEO strategies to improve website visibility, increase organic traffic, and enhance online presence in search engine results."
    },
    {
      icon: <BsPeopleFill />,
      title: "Social Media Management",
      description: "Assist clients in managing their social media platforms effectively, creating engaging content and optimizing audience reach."
    },
    {
      icon: <HiSpeakerphone />,
      title: "Digital Marketing",
      description: "Develop and implement digital marketing strategies, including PPC advertising, email marketing, and conversion rate optimization."
    },
    {
      icon: <SiMicrostrategy />,
      title: "Consulting and Strategy",
      description: "Provide expert consulting services to help clients define their digital strategy, optimize their online presence, and drive business growth."
    },
  ]

  const animations = {
    head: {
      initial: { opacity: 0, y: 70 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  }

  return (
    <div className='servicessection'>
      <motion.div {...animations.head} className='head'>
        <h1>Services</h1>
        <img src={servicesimage} alt="" />
      </motion.div>
      <div className="servicesholder">
        {services.map((service, index) => (
          <motion.div {...animations.head} className="service" key={index}>
            <div className="icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>

          </motion.div>
        ))}
      </div>
      <motion.div {...animations.head} className="contact">
        <p>As a <b>freelancer</b> and <b>independent developer</b>, I am always <b>Open</b> for Full Stack Development Roles. Collaborate now...</p>
        <a href="mailto:deependraparmar1@gmail.com" target='_blank' rel='noopener noreferrer' >Hire Me <MdWork/></a>
      </motion.div>
    </div>
  )
}
