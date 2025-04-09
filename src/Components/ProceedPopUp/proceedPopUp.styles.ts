import styled from "styled-components";
import { Flex } from "../Box/box.styles";

type Custom = {
  translate?: string;
};
export const ProceedPopupWrap = styled(Flex)<Custom>`
  background-color: #1a1d1f;
  height: 5rem;
  transition: all 0.3s ease;
  position: fixed;
  bottom: 0;
  padding: 1rem 2rem;
  transform: ${({ translate = "translateY(10rem)" }) => translate};
  z-index: 2;
  justify-content: space-between;
  left: 0;
  border-top: 1.5px solid #5c5e604a;

  .popup-button-wrap {
    gap: 1rem;
    width: max-content;
  }
  .popup-text-wrap {
    width: max-content;
    gap: 0.5rem;
    .price-per-week {
      color: #ea9a20;
    }
  }

  @media (max-width: 1050px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;

    .popup-button-wrap {
      width: 100%;
      button {
        width: calc(50% - 0.5rem);
      }
    }
  }
`;
