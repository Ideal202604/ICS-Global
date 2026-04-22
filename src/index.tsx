import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./screens/About";
import { Blog } from "./screens/Blog";
import { Box } from "./screens/Box";
import { Gallery } from "./screens/Gallery";
import { IcsHome } from "./screens/IcsHome";
import { Service } from "./screens/Service";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IcsHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/box" element={<Box />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
