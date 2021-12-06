import React from "react";
import { MyWork } from "../components";
import { rotateCard, rotateCard2 } from "../animation";
import projectsData from "../fixtures/projectsData.json";
import data from "../fixtures/data.json";
import { useScroll } from "../hooks";
export function ProjectsContainer() {
  const [element, control] = useScroll();
  return (
    <MyWork reff={element} initial="hidden" animate={control}>
      <MyWork.Title>Projects</MyWork.Title>
      <MyWork.ProjectsHolder>
        <MyWork.FirstContainer>
          {projectsData.map((card) => (
            <MyWork.ProjectCard
              href={card.link}
              target="_blank"
              variants={rotateCard}
              key={card.id}
            >
              <MyWork.ProjectImage src={card.src} />
              <MyWork.ProjectDesc>
                <MyWork.CardTitle>{card.title}</MyWork.CardTitle>
                <MyWork.Desc>{card.desc}</MyWork.Desc>
              </MyWork.ProjectDesc>
            </MyWork.ProjectCard>
          ))}
        </MyWork.FirstContainer>
        <MyWork.SecondContainer>
          {data.map((card) => (
            <MyWork.ProjectCard
              target="_blank"
              href={card.link}
              variants={rotateCard2}
              key={card.id}
            >
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
