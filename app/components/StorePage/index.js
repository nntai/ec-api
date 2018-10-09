import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
const StorePage = ({ increaseNumber }) => {
  const onIncrease = e => {
    e.preventDefault();
    increaseNumber();
  };

  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <button type="button" onClick={onIncrease}>
        Increase 1
      </button>
    </div>
  );
};

StorePage.propTypes = {
  increaseNumber: PropTypes.func.isRequired,
};

export default StorePage;
