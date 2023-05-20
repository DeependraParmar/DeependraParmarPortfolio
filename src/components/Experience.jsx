import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import certifications from "../assets/certifications.json";
import certificate from "../assets/certificate.svg";
import { FiExternalLink } from "react-icons/fi";
import achievement from "../assets/achievements.svg";
import certificate1 from "../assets/certifications/winnerwittyhacks.png";
import experience from "../assets/experience.svg";
import experiencedata from "../assets/experience.json";
import { GoVerified } from "react-icons/go"
import badge from "../assets/badge.png";
import BackToTop from './BackToTop';

export default function Experience() {
  document.title = "Experience | Deependra Parmar";
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  const animations = {
    div: {
      initial: {
        y: '40%',
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
        y: '40%',
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
  }

  return (
    <div className='experience'>
      <div className="experiencesection">
        <motion.div {...animations.headdiv} className="head">
          <img src={experience} alt="" />
          <h1>Experience</h1>
        </motion.div>
        <div className="timeline">
          <motion.div {...animations.div} className="timelinebox">
            {
              experiencedata['experience: '].map((item, index) => (
                <TimeLineItem key={index} title={item.company} position={item.position} from={item.from} description={item.description} url={item.url} />
              ))
            }
          </motion.div>
        </div>
      </div>
      <div className="achievementsection">
        <motion.div {...animations.headdiv} className='head'>
          <h1>Achievements</h1>
          <img src={achievement} alt="" />
        </motion.div>
        <motion.div {...animations.div} className='achievementcertificateholder'>
          <img src={certificate1} alt="" />
          <div className="info">
            <img src={badge} alt="" />
            <h2>Winner @ Witthacks 3.0 </h2>
            <p>During the <b>Wittyhacks</b> hackathon organized by <b>Datacode.in</b>, a 36-hour long hackathon, our team, <b>Geeks.Js</b>, achieved an incredible milestone in our journey. 🚀💫 As second-year students from Tier 3 colleges, we surpassed all expectations and emerged victorious in the <b>Biggest Hackathon of Central India</b>. 🏆🥇 With a wildcard entry received just two days prior to the event, we embraced the challenge wholeheartedly. 💪🔥 We demonstrated our technical prowess, innovative thinking and used all to conquer the hackathon.  💡👨‍💻 Our debut in the world of hackathons became a resounding success, symbolizing our commitment to excellence. ✨🎉 This achievement showcases not only our technical skills but also our ability to adapt, collaborate, and excel under pressure. 💪🤝 We are immensely proud of this accomplishment and look forward to continuing our journey of innovation and growth. 🌟🌱</p>
            <a href="https://github.com/DeependraParmar/AirIQ-Wittyhacks" target='blank' rel='noopener noreferrer' >See Our Project <FiExternalLink /></a>
          </div>
        </motion.div>
      </div>
      <div className='certificationsection'>
        <motion.div {...animations.headdiv} className='head'>
          <img src={certificate} alt="" />
          <h1>Certifications</h1>
        </motion.div>
        <div className="certificateholder">
          {
            certifications.certifications.map((certificate, index) => {
              return (
                <motion.div {...animations.div} className='certificatecard' key={index}>
                  <img src={certificate.imgSrc} alt={certificate.title} />
                  <h3>{certificate.title}</h3>
                  <p>Issued By: {certificate.issuer}</p>
                  <a href={certificate.imgSrc} target='blank' rel='noopener noreferrer'>Show Credential  <FiExternalLink /></a>
                </motion.div>
              )
            }
            )}
        </div>
      </div>
            <BackToTop />
    </div>
  )
}


const TimeLineItem = ({ title, position, from, description, url }) => (
  <div className={'timelineitem'}>
    <h2>{position}  <GoVerified /></h2>
    <h3>{title} <a href={url} target='_blank' rel='noopener noreferrer'><FiExternalLink /></a></h3>
    <p>Dated: <b>{from}</b></p>
    <p>{description}</p>
  </div>
)