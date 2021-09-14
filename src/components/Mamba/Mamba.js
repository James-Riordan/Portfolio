import React from 'react';

import { Section } from '../../styles/GlobalComponents';


import { NumContainer, Number, NumberTwentyFour } from './MambaStyles'

const Mamba = (props) => (
  <>
    <Section row nopadding>
      <NumContainer>
          <a href="https://www.youtube.com/watch?v=qJyoYk9E2oA" target="_blank">
            <Number>08</Number>
          </a>
          <a href="https://www.youtube.com/watch?v=28CAUL0X2Zg" target="_blank">
            <Number>24</Number>
          </a>
      </NumContainer>
    </Section>
  </>
);

export default Mamba;