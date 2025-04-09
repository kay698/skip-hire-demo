import styled from "styled-components";

interface FlexProps {
  flex?: string;
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
  flexDir?: string;
  width?: string;
  height?: string;
  minHeight?: string;
  margin?: string;
  padding?: string;
  background?: string;
  border?: string;
  opacity?: string;
  gap?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex: ${({ flex }) => flex ?? ""};
  justify-content: ${({ justifyContent = "flex-start" }) => justifyContent};
  align-items: ${({ alignItems = "center" }) => alignItems};
  flex-wrap: ${({ flexWrap = "wrap" }) => flexWrap};
  flex-direction: ${({ flexDir = "row" }) => flexDir};
  width: ${({ width = "100%" }) => width};
  height: ${({ height = "max-content" }) => height};
  min-height: ${({ minHeight = "max-content" }) => minHeight};
  margin: ${({ margin = "0" }) => margin};
  padding: ${({ padding = "0" }) => padding};
  background: ${({ background = "" }) => background};
  border: ${({ border = "" }) => border};
  opacity: ${({ opacity = "1" }) => opacity};
  gap: ${({ gap = "1rem" }) => gap};
`;

interface GridProps {
  gridCol?: string;
  gridRow?: string;
  gap?: string;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  width: 100%;
  grid-template-columns: ${({ gridCol = "1fr" }) => gridCol};
  grid-template-rows: ${({ gridRow = "auto auto auto auto" }) => gridRow};
  grid-gap: ${({ gap = "1rem" }) => gap};
`;
