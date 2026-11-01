import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Why from "./components/Why";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Why />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
