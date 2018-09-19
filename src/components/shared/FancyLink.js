import { OutboundLink } from 'gatsby-plugin-google-analytics';

import styled from 'react-emotion';
import styles from 'config/styles';

export default styled(OutboundLink)`
  text-decoration: none;
  color: ${styles.colors.text};
  line-height: 1.4;
  display: inline;
  font-weight: bold;
  font-size: ${styles.text.medium};
  transition: all 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
  cursor: pointer;
  box-shadow: inset 0 -3px 0 0 ${props => props.linkColor || styles.colors.defaultLinkUnderlineColor};

  &:focus,
  &:hover {
    box-shadow: inset 0 ${props => props.hoverInsetAmount || '-10px'} 0 0
      ${props => props.linkColor || styles.colors.defaultLinkUnderlineColor};
  }
`;
