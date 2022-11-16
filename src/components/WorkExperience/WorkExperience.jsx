import React from 'react';
import './WorkExperience.css';
import Hr from './../Hr/Hr';

export const WorkExperience = () => (
  <section className='work-experience'>
    <h3>work experience</h3>
    <Hr />
    <div className='work-experience-container'>
      <div className='work-experience-card'>
        <h2 className='work-experience-card__title'>JOB POSITION</h2>
        <p>Company</p>
        <p>2018 - present</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
          justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel
          tempor lacinia. Suspendisse non augue.
        </p>
        <ul>
          <li>Lorem ipsum dolor</li>
          <li>Consectetur adipiscing elit</li>
        </ul>
      </div>
      <div className='section-work-experience-splitter'></div>
      <div className='work-experience-card'>
        <h2 className='work-experience-card__title'>JOB POSITION</h2>
        <p>Company</p>
        <p>2018 - present</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
          justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel
          tempor lacinia. Suspendisse non augue.
        </p>
        <ul>
          <li>Lorem ipsum dolor</li>
          <li>Consectetur adipiscing elit</li>
        </ul>
      </div>
      <div className='section-work-experience-splitter'></div>
      <div className='work-experience__card'>
        <h2 className='work-experience-card__title'>JOB POSITION</h2>
        <p>Company</p>
        <p>2018 - present</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
          justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel
          tempor lacinia. Suspendisse non augue.
        </p>
        <ul>
          <li>Lorem ipsum dolor</li>
          <li>Consectetur adipiscing elit</li>
        </ul>
      </div>
    </div>
  </section>
);
