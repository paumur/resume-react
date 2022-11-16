import React from 'react';
import PropTypes from 'prop-types';
import './Pill.css';

const Pill = ({ type, children }) => {
  return <div className={type}>{children}</div>;
};

Pill.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Pill;
