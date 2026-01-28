import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Components/BlogPage/BlogPage";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import BlogDetails from "./Components/BlogDetail/BlogDetail";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogpage" element={<BlogPage/>}/>
        <Route path="/blog/:id" element={<BlogDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
