import React from 'react';
import Hr from '../Hr/Hr';
import PropTypes from 'prop-types';

const Skills = (props) => {
  return (
    <section className='technical'>
      <h3>technical skills</h3>
      <Hr />
      <div className='skillCard'>
        <div className='beginner-level'>HTML</div>
        <div className='beginner-level'>CSS/SCSS</div>
        <div className='intermediate-level'>JAVASCRIPT</div>
        <div className='intermediate-level'>REACT.JS</div>
      </div>
    </section>
  );
};

Skills.propTypes = {};

export default Skills;
