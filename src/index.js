import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Creation from "./pages/Creation";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#00e2ff",
    },
  },
});

console.log("%cSalut ! 👋", "color: cyan");
console.log("%cSi c'est mon code que vous cherchez, vous pouvez le trouver sur mon GitHub !", "color: cyan");
console.log("👉 https://github.com/KWurZ-Ow");
console.log(" ");

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/creation/:questionNumber" element={<Creation />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
