import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const colors = {
  default: {
    500: "#1f2235",
  },
  primary: {
    100: "#ff4a56",
    500: "#ff4a56",
  },
};

const Button = {
  // The styles all Cards have in common
  baseStyle: {
    fontWeight: "bold",
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
      borderColor: "#ff4a56",
      color: "#ff4a56",
      _hover: {
        bg: "#ff4a56",
        color: "white",
      },
    },
    solid: {
      bg: "#ff4a56",
      color: "white",
      _hover: {
        bg: "#e6000f",
      },
    },
    ghost: {
      bg: "transparent",
      color: "#ff4a56",
      _hover: {
        bg: "#ff4a56",
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
