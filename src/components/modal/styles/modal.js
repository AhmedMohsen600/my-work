import styled from "styled-components/macro";

export const Container = styled.iframe`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  z-index: 100000;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transform: ${({ show }) => (show ? "scale(1)" : "scale(0)")};
  pointer-events: ${({ show }) => (show ? "all" : "none")};
  transition: all 1s ease;
  border: none;
  background-color: white;
`;

export const Inner = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: red;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ProjectInfo = styled.div``;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h3``;

export const Desc = styled.p``;
