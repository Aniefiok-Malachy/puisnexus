import Navbar from "../Components/Navbar/Navbar";
import FooterCTA from "../Components/FooterCTA/FooterCTA";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <section id="contact">
        <FooterCTA />
      </section>
    </>
  );
}
