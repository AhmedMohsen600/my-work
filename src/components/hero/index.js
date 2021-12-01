import React from "react";

import {
  Container,
  Info,
  Image,
  Description,
  Title,
  ImageHolder,
  Empty,
  ThrowLine,
  Inner,
} from "./styles/hero";

export default function Hero({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Hero.Info = function HeroInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};
Hero.Image = function HeroImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Hero.Description = function HeroDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};
Hero.Title = function HeroTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Hero.ImageHolder = function HeroImageHolder({ children, ...restProps }) {
  return <ImageHolder {...restProps}>{children}</ImageHolder>;
};
Hero.Empty = function HeroEmoty() {
  return <Empty />;
};

Hero.ThrowLine = function HeroThrowLine({ ...restProps }) {
  return <ThrowLine {...restProps} />;
};
