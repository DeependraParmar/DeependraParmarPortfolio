import React, { useEffect } from 'react'
import BackToTop from './BackToTop';
import { projects } from '../assets/projects';
import projectsimage from '../assets/projects.svg';
import { AiFillGithub } from 'react-icons/ai';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { animations, motion } from 'framer-motion';



export default function Projects() {
  document.title = "Projects | Deependra Parmar";
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);



  const animations = {
    head: {
      initial: {
        opacity: 0,
        y: 60
      },
      whileInView: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.6, 0.05, -0.01, 0.9]
        }
      }
    },
    projectcard: {
      initial: {
        opacity: 0,
        y: 60
      },
      whileInView: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.6, 0.05, -0.01, 0.9]
        }
      }
    }
  }


  return (
    <div className='projects'>
      <div className="projectssection">
        <motion.div {...animations.head} className="head">
          <h1>Projects</h1>
          <img src={projectsimage} alt="" />
        </motion.div>

        <div className="projectholder">
          {
            projects.map((project, index) => {
              return (
                <motion.div {...animations.projectcard} className="projectcard" key={index} >
                  <div className="content">
                    <a href={project.url} target='_blank' rel='noopener noreferrer' >

                      <img src={project.img} alt="" />
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <a href={project.githuburl} target='_blank' rel='noopener noreferrer' >Github<AiFillGithub /></a>
                    </a>

                  </div>
                </motion.div>
              )
            })
          }
        </div>
      </div>
      <BackToTop />
    </div>
  )
}
