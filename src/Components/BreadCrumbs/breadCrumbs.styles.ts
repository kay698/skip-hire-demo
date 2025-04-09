import styled from "styled-components";
import { Flex } from "../Box/box.styles";

export const BreadCrumbsWrap = styled(Flex)`
  padding: 0.7rem 1rem;
  border-radius: 0.3rem;
  background-color: #1a1d1f;
  gap: 0.8rem;

  .completed-crumb {
    color: #ea9a209c;
  }

  .active-crumb {
    color: #ea9a20;

    .breadcrumb-icon {
      display: block;
    }
  }

  @media (max-width: 1024px) {
    gap: 0.4rem;
    padding: 0.7rem;

    .breadcrumb-item {
      .breadcrumb-icon {
        display: none;
      }
    }

    .active-crumb {
      .breadcrumb-label {
        display: none;
      }

      .breadcrumb-icon {
        display: block;
      }
    }
  }
`;
