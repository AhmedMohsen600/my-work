import styled from "styled-components/macro";
import { motion } from "framer-motion";
export const Container = styled(motion.section)`
  display: flex;
  position: relative;
  overflow-x: hidden;
  min-height: 90vh;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  display: flex;
  width: 95%;
  margin: auto;
  gap: 48px;
`;
// for the Info
export const Info = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  overflow-y: hidden;
  gap: 16px;
`;
export const Title = styled(motion.h2)`
  font-size: 50px;
  color: white;
`;
export const Description = styled(motion.p)`
  font-size: 16px;
  color: white;
`;

export const ImageHolder = styled(motion.div)`
  flex: 1;
  overflow: hidden;
`;

export const Image = styled(motion.img)`
  max-width: 100%;
  object-fit: cover;
  border-radius: 16px;
`;

export const Empty = styled.div`
  height: 2.5px;
`;
export const ThrowLine = styled(motion.div)`
  height: 10px;
  background-color: #29674d;
  position: absolute;
  top: 20rem;
  left: 1px;
`;
