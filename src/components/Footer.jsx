import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className='footer-container'>
    <div className='footer-card'>
      <div className='footer-card__header'>LOCATION</div>
      <div>
        <p>Imaginary St. 52,</p>
      </div>
      <div>
        <p>Vilnius, Narnia</p>
      </div>
    </div>
    <div className='footer-card'>
      <div className='footer-card__header'>CONTACT</div>
      <div>
        <a href='tel:+37060000333'>+37060000333</a>
      </div>
      <div>
        <a href='mailto: abc@example.com'>email@test.dev</a>
      </div>
    </div>
    <div className='footer-card'>
      <div className='footer-card__header'>SOCIAL</div>
      <div>
        <a target='_blank' rel='noreferrer' href='https://linkedin.com/'>
          Linkedin/username
        </a>
      </div>
      <div>
        <a target='_blank' rel='noreferrer' href='https://twitter.com/'>
          email@test.dev
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
