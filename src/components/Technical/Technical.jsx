import React from 'react';
import Hr from './../Hr/Hr';
import './Technical.css';

const Technical = () => (
  <section className='technical'>
    <h3>technical skills</h3>
    <Hr />
    <div className='technical__content'>
      <div className='beginner-level'>HTML</div>
      <div className='beginner-level'>CSS/SCSS</div>
      <div className='intermediate-level'>JAVASCRIPT</div>
      <div className='intermediate-level'>REACT.JS</div>
    </div>
  </section>
);
export default Technical;
