import React from "react";
import { Hero } from "../components";
import { titleAnim, descAnim, imgAnim, lineThrow } from "../animation";
export function HeroContainer() {
  return (
    <>
      <Hero initial="hidden" animate="show">
        <Hero.ThrowLine variants={lineThrow} />
        <Hero.ImageHolder>
          <Hero.Image variants={imgAnim} src="/images/cool.jpeg" />
        </Hero.ImageHolder>
        <Hero.Info>
          <Hero.Title variants={titleAnim}>Front End Developer</Hero.Title>
          <Hero.Description variants={descAnim}>
            Amazing Front End Developer who is able to create amazing UI
          </Hero.Description>
        </Hero.Info>
      </Hero>
    </>
  );
}
