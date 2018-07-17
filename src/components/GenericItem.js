import React from 'react';
import styled from 'react-emotion';
import styles from 'config/styles';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import FancyLink from 'components/shared/FancyLink';

const Wrapper = styled.div`
  margin-bottom: 2.6rem;
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
      <FancyLink
        linkColor={styling && styling.linkColor}
        href={href}
        target={'_blank'}
        rel="noopener noreferrer"
      >
        {title}
      </FancyLink>
      <Subtitle
        dangerouslySetInnerHTML={{
          __html: subtitle,
        }}
      />
    </Wrapper>
  );
};

export default GenericItem;
