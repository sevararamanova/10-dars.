import React from 'react';
import './About.css';
import hidjab from '../../images/images.jpeg';
import { FaInstagram, FaTelegram } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about">
        
    <div className='about__flex'>
       <div className='about__img'>
         <img src={hidjab} alt="hidjab"/>
       </div>
       <div className='about__desc'>
        <h1>Developer, Teacher, Stylist,<br></br>Nail Artist</h1>
        <p>I am Sevara. I am 25 years old.<br></br> I studied as a teacher. Later, due to my interest,<br></br> I studied manicure, pedicure, and make-up.<br></br> Currently, I am studying in the IT field at the educational center "Najot Ta'lim".</p>
      </div>
      </div>
      <div className="social-icons">
            <a href="https://www.instagram.com/sevara.ramanova" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon instagram-icon" />
            </a>
            <a href="https://t.me/@q_quer" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="icon telegram-icon" />
            </a>
          </div>
    </div>
  );
};

export default About;
