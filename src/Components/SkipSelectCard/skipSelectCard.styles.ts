import styled from "styled-components";
import { Flex, Grid } from "../Box/box.styles";
import CardBackground from "../../assets/skip-hire.jpeg";

export const SkipSelectCardWrap = styled(Flex)`
  border-radius: 0.1rem;
  background-color: #1a1d1f;
  height: 30rem;
  flex-direction: column;
  width: 23%;
  border-radius: 0.4rem;
  border: 1.5px solid #5c5e604a;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  .skip-select-card-sub {
    background: linear-gradient(0deg, #00000099, #00000099),
      url(${CardBackground});
    height: 55%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: all 0.3s ease;
  }

  @media (max-width: 1050px) {
    width: 48%;
    height: 22rem;
    border-radius: 0.3rem;
  }
`;
