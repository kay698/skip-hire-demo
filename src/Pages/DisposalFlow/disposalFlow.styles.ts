import styled from "styled-components";
import { Flex } from "../../Components/Box/box.styles";

export const DisposalFlowWrap = styled(Flex)`
  padding: 2rem;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  overflow-y: auto;
  padding-top: 100px;

  .disposal-flow-header {
    flex-direction: column;
    margin: 2rem 0;

    .sub-header-text {
      opacity: 0.8;
    }
  }
  .skip-select-cards-wrap {
    gap: 1.5rem;
  }
  @media (max-width: 1050px) {
    padding: 1rem;

    .skip-select-cards-wrap {
      gap: 1rem;
    }

    .disposal-flow-header {
      margin-top: 5rem;
    }
  }
`;
