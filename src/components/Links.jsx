import React from 'react';
import Hr from './Hr/Hr';
// import '../Default.css';
import './Links.css';
import Link from './Link';
import linksData from '../data/linksData';
import { uid } from 'uid';

const Links = () => {
  return (
    <section className='links'>
      <h3>Links</h3>
      <Hr />
      <div>
        {linksData.map((link) => (
          <Link
            key={uid()}
            imgSrc={link.imgSrc}
            imgAlt={link.imgAlt}
            hRef={link.hRef}
            children={link.children}
          />
        ))}
        {/* <Link
          key={uid()}
          imgSrc='../img/linkedin.png'
          imgAlt='alt'
          hRef=''
          children='Hello'
        /> */}
      </div>
    </section>
  );
};

export default Links;
