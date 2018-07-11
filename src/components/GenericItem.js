import React from 'react';
import styled from 'react-emotion';
import styles from 'config/styles';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Wrapper = styled.div`
  margin-bottom: 2.6rem;
`;

const Title = styled(OutboundLink)`
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
    box-shadow: inset 0 -14px 0 0 ${props => props.linkColor || styles.colors.defaultLinkUnderlineColor};
  }
`;

const Subtitle = styled.div`
  font-size: ${styles.text.small};
  margin-top: 4px;
  color: ${styles.colors.subtitle};
  widows: 2;
`;

const GenericItem = ({ title, subtitle, styling, href }) => {
  return (
    <Wrapper>
      <Title
        linkColor={styling && styling.linkColor}
        href={href}
        target={'_blank'}
        rel="noopener noreferrer"
      >
        {title}
      </Title>
      <Subtitle
        dangerouslySetInnerHTML={{
          __html: subtitle,
        }}
      />
    </Wrapper>
  );
};

export default GenericItem;
