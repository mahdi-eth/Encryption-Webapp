import { ThemeProvider } from "@emotion/react";
import App from "./App";
import { React } from "react";
import * as ReactDOM from "react-dom/client";
const theme = {
  colors: {
    primary: "hotpink",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
