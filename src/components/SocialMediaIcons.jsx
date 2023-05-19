import React from 'react';
import {AiFillMail,AiFillLinkedin,AiFillInstagram,AiFillGithub,AiFillYoutube,AiFillFacebook} from "react-icons/ai";

export default function SocialMediaIcons() {

  return (
    <div className="socialmediaicons">
        <ul>
            <li><a href="https://www.linkedin.com/in/deependraparmar" target='blank' rel='noopener noreferrer' className='linkedin'><AiFillLinkedin/></a></li>
            <li><a href="https://www.github.com/DeependraParmar" target='blank' rel='noopener noreferrer' className='github'><AiFillGithub/></a></li>
            <li><a href="https://www.youtube.com/@learnlogics" target='blank' rel='noopener noreferrer' className='youtube'><AiFillYoutube/></a></li>
            <li><a href="https://www.instagram.com/_deependra.parmar" target='blank' rel='noopener noreferrer' className='instagram'><AiFillInstagram/></a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100069768416569"  target='blank' rel='noopener noreferrer'className='facebook'><AiFillFacebook/></a></li>
            <li><a href="mailto:deependraparmar1@gmail.com" target='blank' rel='noopener noreferrer' className='mail'><AiFillMail/></a></li>
        </ul>
    </div>
  )
}
