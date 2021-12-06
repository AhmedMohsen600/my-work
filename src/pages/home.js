import React from "react";
import { HeaderContainer } from "../containers/header";
import { HeroContainer } from "../containers/hero";
import { ProjectsContainer } from "../containers/projects";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.div initial="hidden" animate="show" exit="exit">
      <HeaderContainer />
      <HeroContainer />
      <ProjectsContainer />
    </motion.div>
  );
}
