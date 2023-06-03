import "./App.css";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { News } from "./components/News";
import { OurServices } from "./components/OurService/OurServices";
import { OurTeam } from "./components/OurTeam";
import { Pricing } from "./components/Pricing";
import { Testimonial } from "./components/Testimonial";

function App() {
  return (
    <div className="App bg-gray-50">
      <HeroSection />
      <OurServices />
      <OurTeam />
      <Testimonial />
      <News />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
