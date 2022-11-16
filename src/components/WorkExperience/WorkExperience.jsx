import React from 'react';
import './WorkExperience.css';
import Hr from './../Hr/Hr';
import WorkExperienceCard from '../WorkExperienceCard/WorkExperienceCard';

export const WorkExperience = () => (
  <section className='work-experience'>
    <h3>work experience</h3>
    <Hr />
    <div className='work-experience-container'>
      <WorkExperienceCard
        jobPosition='JOB POSITON'
        company='Company Name'
        timeLine='2018 - present'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
          justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel
          tempor lacinia. Suspendisse non augue.'
        li={['Lorem ipsum dolor', 'Consectetur adipiscing elit']}
      />
      <div className='section-work-experience-splitter'></div>
      <WorkExperienceCard
        jobPosition='JOB POSITON'
        company='Company Name'
        timeLine='2018 - present'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
          justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel
          tempor lacinia. Suspendisse non augue.'
        li={['Lorem ipsum dolor', 'Consectetur adipiscing elit']}
      />
      <div className='section-work-experience-splitter'></div>
      <WorkExperienceCard
        jobPosition='JOB POSITON'
        company='Company Name'
        timeLine='2018 - present'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
          justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel
          tempor lacinia. Suspendisse non augue.'
        li={['Lorem ipsum dolor', 'Consectetur adipiscing elit']}
      />
    </div>
  </section>
);
