import React from 'react';
import FooterCard from '../FooterCard/FooterCard';
import './Footer.css';

const Footer = () => (
  <footer className='footer-container'>
    <FooterCard
      title='LOCATION'
      first_field={<p>Imaginary St. 52,</p>}
      second_field={<p>Vilnius, Narnia</p>}
    />
    <FooterCard
      title='CONTACT'
      first_field={<a href='tel:+37060000333'>+37060000333</a>}
      second_field={<a href='mailto: abc@example.com'>email@test.dev</a>}
    />
    <FooterCard
      title='SOCIAL'
      first_field={
        <a target='_blank' rel='noreferrer' href='https://linkedin.com/'>
          Linkedin/username
        </a>
      }
      second_field={
        <a target='_blank' rel='noreferrer' href='https://twitter.com/'>
          email@test.dev
        </a>
      }
    />
  </footer>
);

export default Footer;
