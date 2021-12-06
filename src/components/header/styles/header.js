import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";
import { motion } from "framer-motion";
export const Container = styled(motion.header)`
  min-height: 10vh;
  background-color: #282828;
  box-shadow: rgb(0 0 0 / 38%) 0px 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: auto;
  padding: 5px 0;
  @media (max-width: 600px) {
    width: 93%;
  }
`;

export const Logo = styled(motion.h1)`
  font-size: 30px;
  color: white;
  font-family: "Allison", cursive;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const Links = styled(ReactRouterLink)`
  text-decoration: none;
  font-size: 18px;
  color: white;
  font-weight: 500;
`;

export const Group = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const JobTitle = styled.h2`
  font-size: 30px;
  font-weight: 400;
  color: white;
  font-style: normal;
  max-width: 100%;
  @media (max-width: 500px) {
    max-width: 100px;
    font-size: 20px;
  }
`;
