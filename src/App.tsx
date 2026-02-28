import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { Showcase } from "./components/Showcase";
import { TechStack } from "./components/TechStack";
import { TouchRipple } from "./components/TouchRipple";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
      <TouchRipple />
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <About />
        <Showcase />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
