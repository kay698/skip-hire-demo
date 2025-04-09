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

  &:hover {
    transform: scale(1.03);

    .private-property-warning {
      transform: scale(1.05);
    }
  }

  .skip-select-card-sub {
    background: linear-gradient(0deg, #000000c4, #000000c4),
      url(${CardBackground});
    height: calc(100% - 5rem);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
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
        transition: transform 0.3s ease 0.1s;
      }

      .price-per-week {
        color: #ea9a20;
      }
    }
  }

  @media (max-width: 1050px) {
    width: calc(50% - 0.5rem);
    height: 22rem;

    &:hover {
      transform: translateY(-5px);
    }
  }
`;
