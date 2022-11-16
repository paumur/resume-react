import React from 'react';
import PropTypes from 'prop-types';
import './WorkExperienceCard.css';
import { uid } from 'uid';

const WorkExperienceCard = ({ jobPosition, company, timeLine, text, li }) => {
  return (
    <div className='work-experience-card'>
      <h2 className='work-experience-card__title'>{jobPosition}</h2>
      <p>{company}</p>
      <p>{timeLine}</p>
      <p>{text}</p>
      <ul>
        {li.map((li) => (
          <li key={uid()}>{li}</li>
        ))}
      </ul>
    </div>
  );
};

WorkExperienceCard.propTypes = {
  jobPosition: PropTypes.string,
  company: PropTypes.string,
  timeLine: PropTypes.string,
  text: PropTypes.string,
  li: PropTypes.array,
};

export default WorkExperienceCard;
