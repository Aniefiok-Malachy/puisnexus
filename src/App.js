import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import FooterCTA from "./Components/FooterCTA/FooterCTA";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import AboutLayout from "./Components/AboutLayout/AboutLayout";
import Resources from "./Components/Resources/Resources";
import BlogPage from "./Components/BlogPage/BlogPage";
import BlogDetail from "./Components/BlogDetail/BlogDetail";
import AdminLogin from "./Components/AdminLogin/AdminLogin";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import AdminDashboardHome from "./Components/AdminDashboard/AdminDashboardHome";
import AdminDashboardCreate from "./Components/AdminDashboard/AdminDashboardCreate";
import AdminDashboardEdit from "./Components/AdminDashboard/AdminDashboardEdit";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutLayout />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />


        {/* ADMIN */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin/dashboard/*"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        >
        <Route index element={<AdminDashboardHome/>}/>
        <Route path="create" element={<AdminDashboardCreate/>}/>
        <Route path="edit" element={<AdminDashboardEdit/>}/>
        <Route path="*" element={<Navigate to ="/admin/dashboard" replace />}/>
        </Route>
      </Routes>
      <FooterCTA />
    </BrowserRouter>
  );
}

export default App;
