/**
 *
 * Footer
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import { Wrapper } from './wrapper.styled';

function Footer() {
  return (
    <Wrapper>
      <FormattedMessage {...messages.header} />
    </Wrapper>
  );
}

Footer.propTypes = {};

export default Footer;
