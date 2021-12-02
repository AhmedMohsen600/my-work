import React from "react";
import { Container, Inner } from "./styles/modal";

export default function Modal({ ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner />
    </Container>
  );
}

Modal.Inner = function ModalInner() {
  return <Inner />;
};
