import React from 'react'
import testimonial from '../assets/testimonial.svg'
import { motion } from 'framer-motion'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ImQuotesLeft } from 'react-icons/im';

export default function Testimonial() {
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
                duration: 0.4,
                delay: 0.2,
            },
        },
        card: {
            initial: {
                y: '20%',
                opacity: 0
            },
            whileInView: {
                y: '0',
                opacity: 1
            },
            transition: {
                duration: 0.3,
            },
        },
    }

    return (
        <div className='testimonial'>
            <motion.div {...animations.div} className="testimonialhead">
                <img src={testimonial} alt="" />
                <h1>Testimonials</h1>
            </motion.div>
            <motion.div {...animations.card} className="testimonialcontent">
                <Carousel autoPlay={true} infiniteLoop={true} duration={3000} className='carousel' showArrows={false} showIndicators={false} showStatus={false} showThumbs={false}  >
                    <div className="testimonialcard">
                        <ImQuotesLeft />
                        <p>Working with Deependra Parmar has been an absolute pleasure. His attention to detail, creativity, and technical expertise are truly commendable. They transformed our website into a stunning and user-friendly platform that perfectly represents our brand. I highly recommend Deependra Parmar for any web development project.</p>
                        <h3>Shivam Sharma</h3>
                    </div>
                    <div className="testimonialcard">
                        <ImQuotesLeft />
                        <p>I am incredibly impressed with the exceptional work done by Deependra Parmar. He took our design ideas and turned them into a visually captivating website that exceeded our expectations. The attention he paid to every little detail and their ability to create a seamless user experience is outstanding. I can't thank Deependra Parmar enough for their professionalism and dedication.</p>
                        <h3>Priya Agrawal</h3>
                    </div>
                    <div className="testimonialcard">
                        <ImQuotesLeft />
                        <p>I had the pleasure of collaborating with Deependra Parmar on a web app project, and the results were outstanding. His expertise in web app development and their commitment to delivering a high-quality product were truly remarkable. The app they created surpassed our expectations in terms of design, functionality, and performance. I highly recommend Deependra Parmar for any web app development needs.</p>
                        <h3>Rahul Jain</h3>
                    </div>
                    <div className="testimonialcard">
                        <ImQuotesLeft />
                        <p>I had the opportunity to work with Deependra Parmar on a branding project, and it was an absolute delight. He understood our brand vision and translated it into a cohesive and visually appealing brand identity. His creativity, professionalism, and prompt communication made the entire process smooth and enjoyable. I would highly recommend Deependra Parmar for any branding or design work.</p>
                        <h3>Sourabh Gurjar</h3>
                    </div>
                </Carousel>
            </motion.div>
        </div>
    )
}
