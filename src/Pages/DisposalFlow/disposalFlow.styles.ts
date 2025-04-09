import styled from "styled-components";
import { Flex } from "../../Components/Box/box.styles";

export const DisposalFlowWrap = styled(Flex)`
  padding: 2rem;
  flex-direction: column;
  gap: 3rem;

  .disposal-flow-header {
    flex-direction: column;
    .sub-header-text {
      opacity: 0.8;
    }
  }

  @media (max-width: 1024px) {
    padding: 1rem;
  }
`;
