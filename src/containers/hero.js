import React from "react";
import { Hero } from "../components";
import {
  titleAnim,
  descAnim,
  imgAnim,
  lineThrow,
  downloadBtn,
} from "../animation";
export function HeroContainer() {
  return (
    <Hero initial="hidden" animate="show">
      <Hero.ThrowLine variants={lineThrow} />
      <Hero.ImageHolder>
        <Hero.Image
          variants={imgAnim}
          actualSrc="/images/cool.jpeg"
          // errorSrc="/images/cool.jpeg"
          loadingSrc="/images/cool.jpeg"
          alt="me-pic"
        />
      </Hero.ImageHolder>
      <Hero.Info>
        <Hero.Title variants={titleAnim}>
          Front End Developer With an
          <span style={{ color: "#25d897" }}> Eye For Details.</span>
        </Hero.Title>
        <Hero.Description variants={descAnim}>
          Frontend developer(React.js) with a proven ability to write clean
          modular, reusable code, well organised architecture and willingness to
          learn more, with a desire to apply learned skills.
        </Hero.Description>
        <Hero.DownloadButton variants={downloadBtn} />
      </Hero.Info>
    </Hero>
  );
}
