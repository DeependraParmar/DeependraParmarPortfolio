import React, { useEffect, useState } from 'react'
import BackToTop from './BackToTop';
import contactimage from '../assets/contact.svg';
import phonecall from "../assets/phonecall.svg";
import { FaUserCheck } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiMessage2Fill } from 'react-icons/ri';
import { MdSend } from 'react-icons/md';
import toast from 'react-hot-toast';
import {motion} from 'framer-motion';
import { addDoc,collection } from 'firebase/firestore';
import { db } from '../firebase';

export default function Contact() {
  document.title = "Contact | Deependra Parmar";
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);


  const [input,setInput] = useState({names:'',email:'',message:''});
  const [disableBtn, setDisableBtn] = useState(false);

  const changeHandler = (e) => {
    setInput({...input,[e.target.name]:e.target.value});
  }

  const submitHandler = async(e) => {
    e.preventDefault();
    setDisableBtn(true);
    try{
      await addDoc(collection(db, "contacts"), {
        name: input.names,
        email: input.email,
        message: input.message
      })

      toast.success('Message Sent Successfully');
      setDisableBtn(false);
      setInput({names:'',email:'',message:''});
    }
    catch(err){
      toast.error('Something went wrong');
      setDisableBtn(false);
    }
  }

  const animations = {
    head: {
      initial: { opacity: 0, y: 100 },
      whileInView: {opacity: 1, y: 0},
      transition: { duration: 0.5, ease: 'easeInOut', delay: 0.2 }
    },
  }
  return (
    <div className='contact'>
      <motion.div {...animations.head} className="head">
        <h1>Contact</h1>
        <img src={phonecall} alt="" />
      </motion.div>

      <div className="contactsection">
        <motion.div {...animations.head} className="contactimage">
          <img src={contactimage} alt="" />
        </motion.div>
        <motion.div {...animations.head} className="contactform">
          <form onSubmit={submitHandler}>
            <div>
              <FaUserCheck /><input type="text" name='names' value={input.names} onChange={changeHandler} placeholder="Deependra Parmar" required />
            </div>
            <div><MdEmail /><input type="email" name='email' value={input.email} onChange={changeHandler} placeholder="deependraparmar1@gmail.com" required /></div>
            <div><RiMessage2Fill /><textarea name="message" value={input.message} onChange={changeHandler} id="" cols="30" rows="1" placeholder="I want to collaborate..." required   ></textarea></div>
            <button className={disableBtn ? "disableBtn": ""} disabled={disableBtn} type="submit">Send  <MdSend /></button>
          </form>
        </motion.div>
      </div>

      <BackToTop />
    </div>
  )
}
