/* eslint-disable quotes */

import Preloader from "./components/Preloader";
import SubHeader from "./components/SubHeader";
import HeaderAreaHeaderSticky from "./components/HeaderAreaHeaderSticky";
import PageHeadingHeaderText from "./components/contact/PageHeadingHeaderText";
import SinglePropertySection from "./components/propertyDetails.jsx/SinglePropertySection";
import SectionBestDeal from "./components/propertyDetails.jsx/SectionBestDeal";
import Footer from "./components/Footer";

function PropertyDetails() {
  return (
    <div>
      <Preloader />

      <SubHeader />

      <HeaderAreaHeaderSticky />

      <PageHeadingHeaderText />

      <SinglePropertySection />

      <SectionBestDeal />

      <Footer />
    </div>
  );
}

export default PropertyDetails;
