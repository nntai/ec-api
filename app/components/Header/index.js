/**
 *
 * Header
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Wrapper, Section, Nav } from './wrapper.styled';
import { Logo, SiteName } from '../Logo';
import messages from './messages';
import logo from '../../images/icon-512x512.png';

function Header() {
  return (
    <Wrapper>
      <Section maxWidth="200px">
        <Logo src={logo} />
        <SiteName>
          <FormattedMessage {...messages.logo} />
        </SiteName>
      </Section>
      <Section>
        <Nav>
          <FormattedMessage {...messages.header} />
        </Nav>
      </Section>
    </Wrapper>
  );
}

Header.propTypes = {};

export default Header;
