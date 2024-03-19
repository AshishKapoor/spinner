import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AnimateSpinner } from "./AnimateSpinner";

const root = createRoot(document.getElementById("app"));

root.render(
  <StrictMode>
    <h1>Spinner</h1>
    <AnimateSpinner size={32} color="orange" />
    <AnimateSpinner size={64} color="orange" />
    <AnimateSpinner size={128} color="orange" />
    <AnimateSpinner size={256} color="orange" />
  </StrictMode>
);
