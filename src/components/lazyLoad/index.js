import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function LazyLoad({ src, alt }) {
  return (
    <div style={{ flex: 1 }}>
      <LazyLoadImage height="auto" width="80%" src={src} alt={alt} />
    </div>
  );
}
