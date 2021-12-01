import React from "react";
import {
  Container,
  Inner,
  ProjectCard,
  ProjectDesc,
  ProjectImage,
  ProjectsHolder,
  Title,
  CardTitle,
  Desc,
  FirstContainer,
  SecondContainer,
} from "./styles/my-work";
export default function MyWork({ children }) {
  return (
    <Container initial="hidden" animate="show">
      <Inner initial="hidden" animate="show">
        {children}
      </Inner>
    </Container>
  );
}

MyWork.ProjectsHolder = function MyWorkProjectHolder({ children }) {
  return <ProjectsHolder>{children}</ProjectsHolder>;
};

MyWork.ProjectCard = function MyWorkProjectCard({ children }) {
  return <ProjectCard>{children}</ProjectCard>;
};

MyWork.Title = function MyWorkTitle({ children }) {
  return <Title>{children}</Title>;
};

MyWork.Desc = function MyWorkDesc({ children }) {
  return <Desc>{children}</Desc>;
};

MyWork.ProjectImage = function MyWorkProjectImage({ ...restProps }) {
  return <ProjectImage {...restProps} />;
};

MyWork.ProjectDesc = function MyWorkProjectDesc({ children }) {
  return <ProjectDesc>{children}</ProjectDesc>;
};

MyWork.CardTitle = function MyWorkCardTitle({ children }) {
  return <CardTitle>{children}</CardTitle>;
};

MyWork.FirstContainer = function MyWorkFirstContainer({ children }) {
  return <FirstContainer>{children}</FirstContainer>;
};

MyWork.SecondContainer = function MyWorkSecondContainer({ children }) {
  return <SecondContainer>{children}</SecondContainer>;
};
