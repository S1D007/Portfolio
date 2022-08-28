import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey! How its Going? <br />
          Welcome To My Portfolio
        </SectionTitle>
        <SectionText>
        Learning and Deploying New Skills EveryDay.
        Fixing Bugs, <br/>Trying To Solve Real World Problme Every Time Everywhere.
        
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;