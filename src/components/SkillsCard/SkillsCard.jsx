import React from 'react';
import Hr from '../Hr/Hr';
import PropTypes from 'prop-types';
import Pill from '../Pill/Pill';
import { uid } from 'uid';

const Skills = ({ title, pillTypes }) => {
  return (
    <section className='skillCard'>
      <h3>{title}</h3>
      <Hr />
      <div>
        {pillTypes.map((pill) => (
          <Pill type={pill.type} children={pill.children} key={uid()} />
        ))}
      </div>
    </section>
  );
};

Skills.propTypes = {
  title: PropTypes.string.isRequired,
  pillTypes: PropTypes.array,
};

export default Skills;
