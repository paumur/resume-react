import React from 'react';
import Hr from './Hr';
import './Personal.css';

const Personal = () => (
  <section className='personal'>
    <h3>personal skills</h3>
    <Hr />
    <div className='personal__content'>
      <div className='beginner-level'>TEAMWORK</div>
      <div className='intermediate-level'>COMMUNICATION</div>
      <div className='advanced-level'>ORGANIZATION</div>
    </div>
  </section>
);

export default Personal;
