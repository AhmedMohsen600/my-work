import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function LazyLoad({ src, alt }) {
  return (
    <div>
      <LazyLoadImage src={src} alt={alt} />
    </div>
  );
}
