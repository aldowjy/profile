import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const colors = {
  default: {
    500: "#ffffff",
  },
  primary: {
    100: "#1978BC",
    500: "#1978BC",
  },
};

const Button = {
  // The styles all Cards have in common
  baseStyle: {
    // fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: "base", // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "#1978BC",
      color: "#1978BC",
      _hover: {
        bg: "#1978BC",
        color: "white",
      },
    },
    solid: {
      bg: "#1978BC",
      color: "white",
      _hover: {
        bg: "#1978BC",
      },
    },
    ghost: {
      bg: "transparent",
      color: "#1978BC",
      _hover: {
        bg: "#1978BC",
        color: "white",
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
};

const theme = extendTheme({
  fonts: {
    heading: `'Roboto Regular', sans-serif`,
    body: `'Roboto Regular', sans-serif`,
  },
  colors,
  components: {
    Button,
  },
});

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
