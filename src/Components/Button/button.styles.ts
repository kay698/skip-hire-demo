import styled from "styled-components";

type Custom = {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  background?: string;
  border?: string;
  borderColor?: string;
  radius?: string;
  fontSize?: string;
  color?: string;
  hoverBg?: string;
};

export const Button = styled.button<Custom>`
  width: ${({ width }) => width || "100%"};
  margin: ${({ margin }) => margin};
  height: ${({ height }) => height || "max-content"};
  min-height: ${({ height }) => height || "3rem"};
  padding: ${({ padding }) => padding || "0.8rem 1rem"};
  border: none;
  background: ${({ background = "#2d2e2f" }) => background};
  border-radius: ${({ radius }) => radius || "0.5rem"};
  box-shadow: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${({ color }) => color || "#fff"};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-left: 0.3rem;
    font-size: 1.7rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: ${({ hoverBg = "#565657e0" }) => hoverBg};
    transform: scale(1.001);

    svg {
      transform: translateX(3px);
    }
  }

  &:focus,
  &:active {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;
