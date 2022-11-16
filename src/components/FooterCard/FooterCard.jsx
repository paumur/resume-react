import React from 'react';
import PropTypes from 'prop-types';

const FooterCard = ({ title, first_field, second_field }) => {
  return (
    <div className='footer-card'>
      <div className='footer-card__header'>{title}</div>
      <div>
        <p>{first_field}</p>
      </div>
      <div>
        <p>{second_field}</p>
      </div>
    </div>
  );
};

FooterCard.propTypes = {
  title: PropTypes.string.isRequired,
  first_field: PropTypes.node,
  second_field: PropTypes.node,
};

export default FooterCard;
