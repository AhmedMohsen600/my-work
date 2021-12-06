import React from "react";
import { Hero } from "../components";
import { titleAnim, descAnim, imgAnim, lineThrow } from "../animation";
export function HeroContainer() {
  return (
    <Hero initial="hidden" animate="show">
      <Hero.ThrowLine variants={lineThrow} />
      <Hero.ImageHolder>
        <Hero.Image variants={imgAnim} src="/images/cool.jpeg" alt="me-pic" />
      </Hero.ImageHolder>
      <Hero.Info>
        <Hero.Title variants={titleAnim}>
          Front End Developer With an
          <span style={{ color: "#25d897" }}> Eye For Details.</span>
        </Hero.Title>
        <Hero.Description variants={descAnim}>
          Junior Front End Developer with 1 year of experience in building
          responsive websites using HTML, CSS, SASS, JavaScript. Expertise in
          frameworks like React.js an agile environment using git as version
          control. Passionate about clean code and getting things done.
        </Hero.Description>
      </Hero.Info>
    </Hero>
  );
}
