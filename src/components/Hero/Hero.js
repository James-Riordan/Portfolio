import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        I'm a <strong>Full Stack Web Developer</strong> from Buffalo, NY. <br></br>
        I specialize in compiled languages and frameworks bringing
        reactivity. responsiveness, and life to products.
        </SectionText>
        <Link href="#footer">
          <Button onClick={props.handleClick}>Contact Me</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;