import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function LazyLoad({ src }) {
  return (
    <div>
      <LazyLoadImage
        effect="blur"
        alt="product"
        src={src} // use normal <img> attributes as props
        width="100%"
        height="220px"
      />
    </div>
  );
}
