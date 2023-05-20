import React from 'react'
import { motion } from 'framer-motion';
import blog from '../assets/blog.svg';
import blog01 from "../assets/blogimages/blog01.jpg";
import blog02 from "../assets/blogimages/blog02.jpg";
import blog03 from "../assets/blogimages/blog03.jpg";
import blog04 from "../assets/blogimages/blog04.jpg";
import blog05 from "../assets/blogimages/blog05.jpg";
import blog06 from "../assets/blogimages/blog06.jpg";
import blog07 from "../assets/blogimages/blog07.jpg";
import blog08 from "../assets/blogimages/blog08.jpg";
import blog09 from "../assets/blogimages/blog09.jpg";
import { Link } from 'react-router-dom';

export default function Blog() {
  document.title = "Blogs | Deependra Parmar";
  const data = {
    blogs: [
      {
        id: "blog01",
        title: "The Journey of Becoming a Full-Stack Web Developer: Tips and Insights",
        image: blog01,
        description: "The term full-stack means developers who are comfortable working with both back-end and front-end technologies. To be more specific, it means that the developer can work with databases, PHP,..."
      },
      {
        id: "blog02",
        title: "The Power of JavaScript: Exploring Modern Frameworks and Libraries",
        image: blog02,
        description: "JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms..."
      }, {
        id: "blog03",
        title: "The Back-End Development: Building Robust and Scalable Solutions",
        image: blog03,
        description: "Back-end development refers to the server-side development. It is the term used for the behind-the-scenes activities that happen when performing any action on a website. It can be logging in..."
      },
      {
        id: "blog04",
        title: "Mastering Front-End Development: Essential Skills and Best Practices",
        image: blog04,
        description: "Front-end development is the practice of converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data..."
      },

      {
        id: "blog05",
        title: "Exploring the World of APIs: A Comprehensive Guide for Web Developers",
        image: blog05,
        description: "An API (Application Programming Interface) is a set of functions that allows applications to access data and interact with external software components, operating systems, or microservices..."
      },

      {
        id: "blog06",
        title: "Securing Web Applications: Best Practices for Web Developers",
        image: blog06,
        description: "Web application security is the process of securing confidential data stored online from unauthorized access and modification. This is accomplished by enforcing stringent policy measures..."
      },
      {
        id: "blog07",
        title: "Performance Optimization Techniques: Speeding Up Your Web Projects",
        image: blog07,
        description: "Performance optimization is the process of improving the speed at which a website loads. This can be done by minifying code, optimizing images, and using a content delivery network (CDN)..."
      },
      {
        id: "blog08",
        title: "Responsive Web Design: Crafting Engaging User Experiences Across Devices",
        image: blog08,
        description: "Responsive web design is the practice of building a website suitable to work on every device and every screen size, no matter how large or small, mobile or desktop. Responsive web design is..."
      },
      {
        id: "blog09",
        title: "Database Fundamentals for Web Developers: From SQL to NoSQL",
        image: blog09,
        description: "A database is a collection of information that is organized so that it can be easily accessed, managed, and updated. In one view, databases can be classified according to types of content..."
      }
    ],
  };
  const animations = {
    head: {
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
    <div className='blogsection'>
      <motion.div {...animations.head} className="head">
        <h1>Blogs</h1>
        <img src={blog} alt="" />
      </motion.div>

      <div className="blogs">
        {data.blogs.map((blog, index) => (
          <motion.div {...animations.head} className="blogcard">
            <Link to={`/blogs/${blog.id}`}>
              <img src={blog.image} alt="" />
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
            </Link>
          </motion.div>
        ))
        }
      </div>
    </div>
  )
}
