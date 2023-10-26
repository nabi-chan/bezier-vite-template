import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import BezierProvider from "@/container/BezierProvider.tsx";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <BezierProvider>
      <App />
    </BezierProvider>
  </StrictMode>,
);
