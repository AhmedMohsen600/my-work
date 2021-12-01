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
export default function MyWork({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

MyWork.ProjectsHolder = function MyWorkProjectHolder({
  children,
  ...restProps
}) {
  return <ProjectsHolder {...restProps}>{children}</ProjectsHolder>;
};

MyWork.ProjectCard = function MyWorkProjectCard({ children, ...restProps }) {
  return <ProjectCard {...restProps}>{children}</ProjectCard>;
};

MyWork.Title = function MyWorkTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

MyWork.Desc = function MyWorkDesc({ children, ...restProps }) {
  return <Desc {...restProps}>{children}</Desc>;
};

MyWork.ProjectImage = function MyWorkProjectImage({ ...restProps }) {
  return <ProjectImage {...restProps} />;
};

MyWork.ProjectDesc = function MyWorkProjectDesc({ children, ...restProps }) {
  return <ProjectDesc {...restProps}>{children}</ProjectDesc>;
};

MyWork.CardTitle = function MyWorkCardTitle({ children, ...restProps }) {
  return <CardTitle {...restProps}>{children}</CardTitle>;
};

MyWork.FirstContainer = function MyWorkFirstContainer({
  children,
  ...restProps
}) {
  return <FirstContainer {...restProps}>{children}</FirstContainer>;
};

MyWork.SecondContainer = function MyWorkSecondContainer({
  children,
  ...restProps
}) {
  return <SecondContainer {...restProps}>{children}</SecondContainer>;
};
