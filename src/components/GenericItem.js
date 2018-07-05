import React from 'react';
import styled from 'react-emotion';
import styles from 'config/styles';

const Wrapper = styled.div`
  margin: 1.4rem 0;
`;

const Title = styled.a`
  text-decoration: none;
  color: ${styles.colors.text};
  line-height: 1.4;
  display: inline;
  font-weight: bold;
  font-size: 1.8rem;
  transition: all 100ms ease-out;
  cursor: pointer;
  box-shadow: inset 0 -3px 0 0 ${props => props.linkColor || styles.colors.defaultLinkUnderlineColor};

  &:hover {
    box-shadow: inset 0 -14px 0 0 ${props => props.linkColor || styles.colors.defaultLinkUnderlineColor};
  }
`;

const Subtitle = styled.div`
  font-size: 1rem;
  margin-top: 4px;
  color: #777;
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
