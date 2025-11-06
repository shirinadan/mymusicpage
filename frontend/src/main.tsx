import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPageView from "./pages/SignupPageView.tsx";
import LoginPageView from "./pages/LoginPageView.tsx";
import "./index.css";
import App from "./App.tsx";
 

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPageView />} />
        <Route path="/sign-up" element={<SignupPageView />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
