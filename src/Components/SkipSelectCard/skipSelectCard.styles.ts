import styled from "styled-components";
import { Flex } from "../Box/box.styles";
import CardBackground from "../../assets/skip-hire.jpeg";

export const SkipSelectCardWrap = styled(Flex)`
  border-radius: 0.4rem;
  background-color: #1a1d1f;
  height: 20rem;
  flex-direction: column;
  width: calc(25% - 1.2rem);
  border: 1.5px solid #5c5e604a;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  .skip-select-card-sub {
    background: linear-gradient(0deg, #000000c4, #000000c4),
      url(${CardBackground});
    height: calc(100% - 5rem);
    background-repeat: no-repeat;
    background-position: center 30%;
    background-size: cover;
    transition: all 0.8s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    position: relative;
    overflow: hidden;
  }

  .skip-select-card-sub {
    padding: 1rem;
    .skip-select-card-textsection {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      height: 100%;
      position: relative;
      .private-property-warning {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 0.7rem;
        color: #ea9a20;
        padding: 0.3rem 0.5rem;
        border-radius: 0.3rem;
        background-color: #2d2e2f;
      }

      .price-per-week {
        color: #ea9a20;
      }
    }
  }
  &:hover {
    /* transform: translateY(-5px); */
    /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); */

    .skip-select-card-sub {
      background-position: center 70%;
      /* transform: scale(1.05); */
    }
  }

  @media (max-width: 1050px) {
    width: calc(50% - 0.5rem);
    height: 22rem;

    &:hover .skip-select-card-sub {
      background-position: center 60%;
    }
  }
`;
