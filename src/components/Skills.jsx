import React from 'react'
import html from '../assets/skills_images/html.svg'
import css from '../assets/skills_images/css.svg'
import js from '../assets/skills_images/javascript.svg'
import typescript from '../assets/skills_images/typescript.svg'
import react from '../assets/skills_images/react.svg'
import node from '../assets/skills_images/nodejs.svg'
import git from '../assets/skills_images/git.svg'
import ps from '../assets/skills_images/ps.svg'
import axios from '../assets/skills_images/axios.svg'
import pp from '../assets/skills_images/pp.svg'
import bootstrap from "../assets/skills_images/bootstrap.svg"
import redux from "../assets/skills_images/redux.svg"
import express from "../assets/skills_images/express.svg"
import sass from "../assets/skills_images/sass.svg"
import tailwindcss from "../assets/skills_images/tailwindcss.svg"
import postcss from "../assets/skills_images/postcss.svg"
import postman from "../assets/skills_images/postman.svg"
import chakraui from "../assets/skills_images/chakraui.svg"
import figma from "../assets/skills_images/figma.svg"
import mysql from "../assets/skills_images/mysql.svg"
import firebase from "../assets/skills_images/firebase.svg"
import mongodb from "../assets/skills_images/mongodb.svg"
import mongoose from "../assets/skills_images/mongoose.svg"
import heroku from "../assets/skills_images/heroku.svg"
import netlify from "../assets/skills_images/netlify.svg"
import vercel from "../assets/skills_images/vercel.svg"
import filmora from "../assets/skills_images/filmora.svg"
import canva from "../assets/skills_images/canva.svg"
import oauth from "../assets/skills_images/oauth.svg"
import npm from "../assets/skills_images/npm.svg"
import jwt from "../assets/skills_images/jwt.svg"
import java from "../assets/skills_images/java.svg"
import github from "../assets/skills_images/github.svg"
import cpp from "../assets/skills_images/cpp.svg"
import c from "../assets/skills_images/c.svg"
import python from "../assets/skills_images/python.svg"
import csharp from "../assets/skills_images/csharp.svg"
import yarn from "../assets/skills_images/yarn.svg"
import { motion } from 'framer-motion'
import skillimg from '../assets/skills.svg'

export default function Skills() {
    const skills = [html, css, js, typescript, node, express, mongodb, mongoose, react, redux, npm, yarn, c, cpp, java, python, csharp, mysql, bootstrap, sass, postcss, tailwindcss, git, github, axios, oauth, jwt, figma, ps, pp, filmora, canva, chakraui, postman, firebase, heroku, netlify, vercel]

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
                delay: 0.2,
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
                delay: 0.2,
            }
        },
    }
    return (
        <div className='skillcontainer'>
            <motion.div {...animations.headdiv} className="skillhead">
                <h1>Skills</h1>
                <img src={skillimg} alt="" />
            </motion.div>
            <div className='skillcontent'>
                {skills.map((skill, index) => (
                    <motion.div {...animations.div} className='skill' key={index}>
                        <img src={skill} alt='' />
                    </motion.div>
                ))}
            </div>

        </div>
    )
}
