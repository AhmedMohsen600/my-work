import React from "react";
import { MyWork } from "../components";
import { rotateCard, rotateCard2 } from "../animation";
import projectsData from "../fixtures/projectsData.json";
import data from "../fixtures/data.json";

export function ProjectsContainer() {
  // variants
  return (
    <MyWork initial="hidden" animate="show">
      <MyWork.Title>Projects</MyWork.Title>
      <MyWork.ProjectsHolder>
        <MyWork.FirstContainer>
          {projectsData.map((pro) => (
            <MyWork.ProjectCard variants={rotateCard} key={pro.id}>
              <MyWork.ProjectImage src={pro.src} />
              <MyWork.ProjectDesc>
                <MyWork.CardTitle>{pro.title}</MyWork.CardTitle>
                <MyWork.Desc>{pro.desc}</MyWork.Desc>
              </MyWork.ProjectDesc>
            </MyWork.ProjectCard>
          ))}
        </MyWork.FirstContainer>
        <MyWork.SecondContainer>
          {data.map((card) => (
            <MyWork.ProjectCard variants={rotateCard2} key={card.id}>
              <MyWork.ProjectImage src={card.src} />
              <MyWork.ProjectDesc>
                <MyWork.CardTitle>{card.title}</MyWork.CardTitle>
                <MyWork.Desc>{card.desc}</MyWork.Desc>
              </MyWork.ProjectDesc>
            </MyWork.ProjectCard>
          ))}
        </MyWork.SecondContainer>
      </MyWork.ProjectsHolder>
    </MyWork>
  );
}
