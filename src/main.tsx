import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Contents } from "./containers/Contents/index.tsx";
import { Content } from "./containers/Content/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Contents />} />
        <Route path="/content/:imdbId" index element={<Content />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
