import React from "react";
import { Header } from "../components";
import { headerAnim } from "../animation";
export function HeaderContainer() {
  return (
    <Header variants={headerAnim} initial="hidden" animate="show">
      <Header.Nav>
        <Header.Logo>Ahmed Mohsen</Header.Logo>
        <Header.JobTitle>Front End Developer</Header.JobTitle>
      </Header.Nav>
    </Header>
  );
}
