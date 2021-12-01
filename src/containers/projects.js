import React from "react";
import { MyWork } from "../components";
import { rotateCard, lineThrow } from "../animation";
import projectsData from "../fixtures/projectsData.json";
import data from "../fixtures/data.json";
export function ProjectsContainer() {
  // variants
  return (
    <MyWork>
      <MyWork.Title variants={rotateCard}>Projects</MyWork.Title>
      <MyWork.ProjectsHolder>
        <MyWork.FirstContainer>
          {projectsData.map((pro) => (
            <MyWork.ProjectCard key={pro.id} variants={lineThrow}>
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
            <MyWork.ProjectCard key={card.id} variants={lineThrow}>
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
