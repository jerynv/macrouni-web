import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import "./styles/typography.css";
import "./styles/shared/page-base.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <style>@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');</style>
    <App />
  </StrictMode>,
);
