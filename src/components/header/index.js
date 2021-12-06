import React from "react";

import { Container, Nav, Logo, Links, Group, JobTitle } from "./styles/header";
export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Nav = function HeaderNav({ children, restProps }) {
  return <Nav {...restProps}>{children}</Nav>;
};

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};

Header.Links = function HeaderLinks({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.JobTitle = function HeaderJobTitle({ children, ...restProps }) {
  return <JobTitle {...restProps}>{children}</JobTitle>;
};
