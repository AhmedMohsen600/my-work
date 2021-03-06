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
  @media (max-width: 1000px) {
    gap: 32px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 24px;
    width: 93%;
  }
`;
// for the Info
export const Info = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  overflow-y: hidden;
  gap: 16px;
  @media (max-width: 600px) {
    gap: 8px;
  }
`;
export const Title = styled(motion.h2)`
  font-size: 48px;
  color: white;
  max-width: 650px;
  @media (max-width: 1000px) {
    font-size: 32px;
  }
  @media (max-width: 600px) {
    font-size: 24px;
    max-width: 350px;
  }
`;
export const Description = styled(motion.p)`
  font-size: 24px;
  color: white;
  font-weight: 200;
  max-width: 100%;
  line-height: 1.3;
  @media (max-width: 1000px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
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

  @media (max-width: 600px) {
    top: auto;
    bottom: 16rem;
  }
`;

export const DownloadButton = styled(motion.a)`
  text-decoration: none;
  background-color: none;
  border-radius: 8px;
  border: 3px solid rgb(37, 216, 151);
  font-size: 16px;
  color: white;
  align-self: flex-start;
  padding: 14px 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  transition: background-color 0.5s ease;
  @media (max-width: 1000px) {
    margin-top: 8px;
    border: 2px solid rgb(37, 216, 151);
    padding: 12px 13px;
  }
  &:hover {
    background-color: rgb(37, 216, 151);
  }
`;
