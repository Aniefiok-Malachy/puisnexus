import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Components/BlogPage/BlogPage";
import BlogDetails from "./Components/BlogDetail/BlogDetail";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import MainLayout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* Pages WITH footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
