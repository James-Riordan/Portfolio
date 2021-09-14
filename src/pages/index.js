import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Mamba from "../components/Mamba/Mamba";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section, OverlapSection } from "../styles/GlobalComponents";

import ScrollAnimation from "react-animate-on-scroll";

const Home = () => {
  return (
    <Layout>
      <title>Portfolio</title>
      <link rel="icon" href="/favicon.ico"></link>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>

      <Projects />
      <Technologies />
      <Mamba />
    </Layout>
  );
};

const Animation = () => (
  <ScrollAnimation animateBounce="bounceIn">
    <p>Text bounces in on scroll</p>
  </ScrollAnimation>
);

export default Home;
