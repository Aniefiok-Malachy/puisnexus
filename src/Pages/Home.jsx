import Hero from "../Components/Hero/Hero";
import Services from "../Components/Services/Services";
import AboutLayout from "../Components/AboutLayout/AboutLayout";
import Partners from "../Components/Partners/Partners";
import Resources from "../Components/Resources/Resources";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>
      <Partners />
      <section id="about">
        <AboutLayout />
      </section>
      <section id="resources">
        <Resources />
      </section>

    </>
  );
}
