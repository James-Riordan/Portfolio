import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  SiSvelte,
  SiPython,
  SiNginx,
  SiRedis,
  SiMongodb,
  SiPostgresql,
  SiApachekafka,
  SiMicrosoftexcel,
  SiDocker,
} from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri";
import { GrGolang } from "react-icons/gr";
import { DiJavascript1 } from "react-icons/di";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  TechTagList,
  TechTag,
  TechnologyLink,
} from "./TechnologiesStyles";

/*
<TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>


  <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

*/

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a wide range of technologies in the web development
      world.
    </SectionText>
    <List>
      <TechnologyLink href="https://google.com" target="_blank">
        <ListItem href="https://google.com">
          <picture>
            <SiSvelte size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Svelte</ListTitle>
            <ListParagraph>
              Minimalistic Frontend
              <br />
              Framework for JS
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </TechnologyLink>
      <TechnologyLink href="https://google.com" target="_blank">
        <ListItem href="https://google.com">
          <picture>
            <RiVuejsFill size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Vue</ListTitle>
            <ListParagraph>
              Frontend Framework <br />
              for JS
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </TechnologyLink>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>React</ListTitle>
          <ListParagraph>
            Frontend Framework <br />
            for JS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiSvelte size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Go</ListTitle>
          <ListParagraph>Language</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>Language</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJavascript1 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
          <ListParagraph>Language</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiRedis size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Redis</ListTitle>
          <ListParagraph>
            In-Memory Database <br />
            Primarily Used for Caching
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiMongodb size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>MongoDB</ListTitle>
          <ListParagraph>
            Document-Oriented <br />
            Database (Non-Relational)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiPostgresql size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>PostgreSQL</ListTitle>
          <ListParagraph>Relational Database</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiNginx size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>nginx</ListTitle>
          <ListParagraph>
            Load Balancer / Web Server /<br />
            Reverse Proxy / HTTP Cache
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiApachekafka size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Apache Kafka</ListTitle>
          <ListParagraph>
            Scalable PubSub <br />
            Messaging System
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiDocker size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Docker</ListTitle>
          <ListParagraph>
            Deployment Tool <br />
            Using Containers
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
