/* eslint-disable quotes */
import Preloader from "./components/Preloader";
import SubHeader from "./components/SubHeader";
import HeaderAreaHeaderSticky from "./components/HeaderAreaHeaderSticky";
import MainBanner from "./components/homePage/MainBanner";
import FeaturedSection from "./components/homePage/FeaturedSection";
import VideoSection from "./components/homePage/VideoSection";
import VideoComponent from "./components/homePage/VideoComponent";
import FunFacts from "./components/homePage/FunFacts";
import SectionBestDeal from "./components/homePage/SectionBestDeal";
import PropertiesSection from "./components/homePage/PropertiesSection";
import ContactSection from "./components/homePage/ContactSection";
import ContactContent from "./components/homePage/ContactContent";

function App() {
  return (
    <div>
      <Preloader />
      <SubHeader />
      <HeaderAreaHeaderSticky />
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
