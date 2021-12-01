import styled from "styled-components/macro";
import { motion } from "framer-motion";
export const Container = styled(motion.section)`
  margin: 40px 0;
  min-height: 60vh;
`;

export const Inner = styled(motion.div)`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(motion.h3)`
  font-size: 40px;
  font-weight: 400;
  color: white;
  text-decoration: underline;
  text-decoration-thickness: 3px;
`;

export const ProjectsHolder = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 32px;
`;

export const ProjectImage = styled(motion.div)`
  width: 100%;
  background: url(${({ src }) => `/images/${src}`}) center / cover no-repeat;
  height: 220px;
  opacity: 0.5;
  transition: all 0.3s ease;
`;

export const ProjectCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #1b1b1b;
  justify-content: center;
  align-items: flex-start;
  width: 31.7%;
  border-radius: 5px;
  cursor: pointer;
  &:hover > ${ProjectImage} {
    opacity: 1;
  }
`;

export const ProjectDesc = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px;
  gap: 8px;
`;

export const CardTitle = styled(motion.h4)`
  font-size: 24px;
  color: white;
`;

export const Desc = styled(motion.p)`
  font-size: 16px;
  font-weight: 200;
  line-height: 1.2;
  color: white;
`;
export const FirstContainer = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: center;
`;

export const SecondContainer = styled(FirstContainer)`
  justify-content: flex-start;
  align-items: flex-start;
`;
