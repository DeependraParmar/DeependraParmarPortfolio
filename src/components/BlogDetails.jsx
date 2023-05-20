import React from 'react'
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion'
import blogdetails from '../assets/blogs';
import blog01 from "../assets/blogimages/blog01.jpg";
import blog02 from "../assets/blogimages/blog02.jpg";
import blog03 from "../assets/blogimages/blog03.jpg";
import blog04 from "../assets/blogimages/blog04.jpg";
import blog05 from "../assets/blogimages/blog05.jpg";
import blog06 from "../assets/blogimages/blog06.jpg";
import blog07 from "../assets/blogimages/blog07.jpg";
import blog08 from "../assets/blogimages/blog08.jpg";
import blog09 from "../assets/blogimages/blog09.jpg";

export default function BlogDetails() {
  const params = useParams();
  const data =  blogdetails.blogs.findIndex((blog) => blog.id === params.id)
  const dataobj = blogdetails.blogs[data];

  const imgArr = [blog01, blog02, blog03, blog04, blog05, blog06, blog07, blog08, blog09];


  const animations = {
    blogdetail: {
      initial: {
        opacity: 0,
        y: 100,
      },
      animate: {  
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        }
      },
      exit: {
        opacity: 0,
        y: 100,
        transition: {
          duration: 0.5,
        }
      }
    },
  }

  return (
    <motion.div {...animations.blogdetail} className='blogdetailssection'>
      <div className="blogcontainer">
        <img src={imgArr[data]} alt="" />
        <h1>{dataobj.title}</h1>
        <p>{dataobj.description.map((i)=> {
              return <p>{i}</p>
        })}</p>
      </div>
    </motion.div>

  )
}
