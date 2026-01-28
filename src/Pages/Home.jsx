import Hero from "../Components/Hero/Hero";
import Services from "../Components/Services/Services";
import AboutLayout from "../Components/AboutLayout/AboutLayout";
import Resources from "../Components/Resources/Resources";
import FooterCTA from "../Components/FooterCTA/FooterCTA";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <AboutLayout />
      </section>

      <section id="resources">
        <Resources />
      </section>

      <section id="contact" >
      <FooterCTA />
      </section>
    </>
  );
}
