import { css } from "@emotion/react";

export type ButtonVariant = {
  color: "primary" | "secondary" | "tertiary";
}

export const $Button = ({ color }: ButtonVariant) => css`
  position: relative;
  border: 0;
  cursor: pointer;
  border-radius: 2px;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  transition: background-color 0.2s ease,
    box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  height: 37px;
  min-width: 90px;
  background: ${color === "primary"
    ? "blue"
    : color === "secondary"
    ? "aqua"
    : "grey"};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: translate(0, 2px);
  }
`;

