import React, { useState, useMemo } from "react";

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
  DownloadButton,
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
Hero.Image = function HeroImage({
  loadingSrc,
  actualSrc,
  errorSrc,
  ...restProps
}) {
  const [isImageLoaded, setImageLoaded] = useState(false);
  // const [hasError, setHasError] = useState(false);
  const src = useMemo(() => {
    // if (hasError) {
    //   return errorSrc;
    // }

    if (isImageLoaded) {
      return actualSrc;
    }

    return loadingSrc;
  }, [isImageLoaded, actualSrc, loadingSrc]);
  return (
    <Image
      src={src}
      loading="lazy"
      onLoad={() => {
        setImageLoaded(true);
        console.log("LOADED");
      }}
      onError={() => {
        console.log("ops ERORR");
      }}
      {...restProps}
    />
  );
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

Hero.DownloadButton = function HeroDownloadButton({ ...restProps }) {
  return (
    <DownloadButton
      href="/ahmed-mohsen-resume.pdf"
      download="Ahmed-cv"
      {...restProps}
    >
      Download CV
    </DownloadButton>
  );
};
