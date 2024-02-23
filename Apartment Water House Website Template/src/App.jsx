/* eslint-disable quotes */
import Preloader from "./components/index/Preloader";
import Header from "./components/Header";
import HeaderArea from "./components/HeaderArea";
import MainBanner from "./components/MainBanner";
import FeaturedSection from "./components/FeaturedSection";
import VideoSection from "./components/VideoSection";
import VideoComponent from "./components/VideoSection";
import FunFacts from "./components/FunFacts";
import SectionBestDeal from "./components/SectionBestDeal";
import PropertiesSection from "./components/PropertiesSection";
import ContactSection from "./components/ContactSection";
import ContactContent from "./components/ContactContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Preloader />
      <Header />
      <HeaderArea />
      <MainBanner />
      <FeaturedSection />
      <VideoSection />
      <VideoComponent />
      <FunFacts />
      <SectionBestDeal />
      <PropertiesSection />
      <ContactSection />
      <ContactContent />
      <Footer />
    </div>
  );
}

export default App;
