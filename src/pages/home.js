import React from "react";
import { HeaderContainer } from "../containers/header";
import { HeroContainer } from "../containers/hero";
import { ProjectsContainer } from "../containers/projects";
export default function Home() {
  return (
    <>
      <HeaderContainer />
      <HeroContainer />
      <ProjectsContainer />
    </>
  );
}
