import React from 'react';
import './Link.css';
import PropTypes from 'prop-types';

const Link = ({ imgSrc, imgAlt, hRef, children }) => {
  return (
    <div className='link__card'>
      <div>
        <img src={require(`${imgSrc}`)} alt={imgAlt} />
      </div>
      <div>
        <a target='_blank' rel='noreferrer' href={hRef}>
          {children}
        </a>
      </div>
    </div>
  );
};

Link.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  hRef: PropTypes.string,
  children: PropTypes.node,
};

export default Link;
