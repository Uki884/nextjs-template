import { style, styleVariants } from "@vanilla-extract/css";

export const colorVariants = styleVariants({
  primary: { background: "blue" },
  secondary: { background: "aqua" },
})

export const button = style({
  position: 'relative',
  border: 0,
  cursor: 'pointer',
  borderRadius: 2,
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: 'white',
  transition: 'background-color 0.2s ease boxShadow 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
  outline: 'none',
  height: 37,
  minWidth: 90,
  selectors: {
    '&:hover': {
      opacity: 0.8
    },
    '&:active': {
      transform: 'translate(0, 2px)'
    }
  }
});
