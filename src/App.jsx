import Navbar from "./components/Navbar";
import AdoptSection from "./pages/AdoptSection";
import ChooseSection from "./pages/ChooseSection";
import HeroSection from "./pages/HeroSection";
import QuestionSection from "./pages/QuestionSection";
import SponsorSection from "./pages/SponsorSection";

function App() {
  return (
    <div className="App bg-[#FDFDFD]">
      <Navbar/>
      <HeroSection />
      <ChooseSection />
      <AdoptSection />
      <SponsorSection />
      <QuestionSection />
    </div>
  );
}

export default App;
