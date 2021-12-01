import React from "react";
import { Header } from "../components";
import { headerAnim } from "../animation";
export function HeaderContainer() {
  return (
    <Header variants={headerAnim} initial="hidden" animate="show">
      <Header.Nav>
        <Header.Logo>Ahmed Mohsen</Header.Logo>
        <Header.Group>
          <Header.Links to="/about">About</Header.Links>
          <Header.Links to="/contact">Contact Me</Header.Links>
          <Header.Links to="/work">Work</Header.Links>
        </Header.Group>
      </Header.Nav>
    </Header>
  );
}
