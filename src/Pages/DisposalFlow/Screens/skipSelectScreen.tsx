import React from "react";
import { Flex } from "../../../Components/Box/box.styles";

const SkipSelectScreen = () => {
  return (
    <Flex>
      <Flex className="disposal-flow-header">
        <h1 className="header-text">Choose Your Skip Size</h1>
        <p className="sub-header-text">
          Select the skip size that best suits your needs
        </p>
      </Flex>
    </Flex>
  );
};
export default SkipSelectScreen;
