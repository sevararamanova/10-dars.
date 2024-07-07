import React from 'react';
import './Contact.css';
import { FaInstagram, FaTelegram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact__title">Biz bilan bog'lanish</h1>
      <div className="contact__info">
        <div className="contact__item">
          <h2>Email:</h2>
          <p>your.email@example.com</p>
        </div>
        <div className="contact__item">
          <h2>Telefon:</h2>
          <p>+998 90 123 45 67</p>
        </div>
        <div className="contact__item">
          <h2>Ijtimoiy tarmoqlar:</h2>
          <div className="contact__social">
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social__icon" />
            </a>
            <a href="https://t.me/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="social__icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

