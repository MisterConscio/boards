import { Route, Routes } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import ThreadPage from "./pages/ThreadPage";

const Pages = () => (
  <Routes>
    <Route path="/" element={<CatalogPage />} />
    <Route path="/thread" element={<ThreadPage />} />
  </Routes>
);

export default Pages;
