import React, { useState } from "react";
import { MyWork, Modal } from "../components";
import { rotateCard, rotateCard2 } from "../animation";
import projectsData from "../fixtures/projectsData.json";
import data from "../fixtures/data.json";

export function ProjectsContainer() {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState("");
  // variants
  return (
    <>
      <Modal show={show} src={url}>
        <Modal.Inner />
      </Modal>
      <MyWork initial="hidden" animate="show">
        <MyWork.Title>Projects</MyWork.Title>
        <MyWork.ProjectsHolder>
          <MyWork.FirstContainer>
            {projectsData.map((card) => (
              <MyWork.ProjectCard
                onClick={() => {
                  setUrl(card.link);
                  setShow(true);
                }}
                // href={card.link}
                // target="_blank"
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
                onClick={() => {
                  setUrl(card.link);
                  setShow(true);
                }}
                // target="_blank"
                // href={card.link}
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
    </>
  );
}
