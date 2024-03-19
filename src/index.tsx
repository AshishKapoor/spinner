import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AnimateSpinner } from "./AnimateSpinner";

const root = createRoot(document.getElementById("app"));

root.render(
  <StrictMode>
    <h1>Spinner</h1>
    <AnimateSpinner size={32} color="lightcoral" />
    <AnimateSpinner size={64} color="gold" />
    <AnimateSpinner size={128} color="deepskyblue" />
    <AnimateSpinner size={256} color="blueviolet" />
  </StrictMode>
);
