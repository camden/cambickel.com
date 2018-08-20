import React from 'react';
import styled from 'react-emotion';
import styles from 'config/styles';
import FancyLink from 'components/shared/FancyLink';

const MainText = styled.h2`
  font-family: 'Merriweather';
  font-weight: 300;
  font-style: italic;
  font-size: ${styles.text.xLarge};
  margin-left: 20px;
  color: ${styles.colors.text};
`;

const Name = styled.span`
  font-weight: 900;
  font-style: normal;
  font-size: 1.1em;

  &::before {
    content: '';
    display: block;
  }

  @media (max-width: ${styles.breakpoints.mobile}) {
    &::before {
      content: '';
      display: inline;
    }
  }
`;

const ExternalLink = styled(FancyLink)`
  font-size: ${styles.text.medium};
`;

const SubtitleText = styled.div`
  margin-top: 40px;
  margin-left: 20px;
  font-size: ${styles.text.medium};
`;

const Hero = () => {
  const github = (
    <ExternalLink
      linkColor={'#cc99ff'}
      href={'https://github.com/camden'}
      target={'_blank'}
    >
      GitHub
    </ExternalLink>
  );
  const twitter = (
    <ExternalLink
      linkColor={'#88ccff'}
      href={'https://twitter.com/camdenbickel'}
      target={'_blank'}
    >
      Twitter
    </ExternalLink>
  );
  const myResume = (
    <ExternalLink href={'https://resume.cambickel.com'} target={'_blank'}>
      my résumé
    </ExternalLink>
  );

  return (
    <div>
      <MainText>
        Hi, my name is <Name>Camden Bickel.</Name>
      </MainText>
      <div>
        <SubtitleText>
          Find me on {github} and {twitter}. Oh, and here's {myResume}.
        </SubtitleText>
      </div>
    </div>
  );
};

export default Hero;
