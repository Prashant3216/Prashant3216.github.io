import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    base: "#000308",
    primary: "rgb(30, 41, 59)",
    secondary: "#edeff2",
  },
breakpoints:{
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
  }
});
export const cyanColor = "cyan.600";
export const purpleColor = "purple";

export const skillShadow =
  "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;";
