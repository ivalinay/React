/* eslint-disable quotes */
import Preloader from "./components/Preloader";
import SubHeader from "./components/SubHeader";
import HeaderAreaHeaderSticky from "./components/HeaderAreaHeaderSticky";
import MainBanner from "./components/homePage/MainBanner";
import FeaturedSection from "./components/homePage/FeaturedSection";
import VideoSection from "./components/homePage/VideoSection";
import VideoComponent from "./components/homePage/VideoComponent";
import FunFacts from "./components/homePage/FunFacts";
import ContactSection from "./components/homePage/ContactSection";
import ContactContent from "./components/homePage/ContactContent";
import Footer from "./components/Footer";
import PropertyDetails from "./PropertyDetails";

function App() {
  return (
    <div>
      {/* <PropertyDetails /> */}
      <Preloader />
      <SubHeader />
      <HeaderAreaHeaderSticky />
      <MainBanner />
      <FeaturedSection />
      <VideoSection />
      <VideoComponent />
      <FunFacts />
      <ContactSection />
      <ContactContent />
      <Footer />
    </div>
  );
}

export default App;
