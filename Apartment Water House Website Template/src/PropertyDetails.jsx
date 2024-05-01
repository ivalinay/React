/* eslint-disable quotes */

import Preloader from "./components/Preloader";
import SubHeader from "./components/SubHeader";
import HeaderAreaHeaderSticky from "./components/HeaderAreaHeaderSticky";
import PageHeadingHeaderText from "./components/contact/PageHeadingHeaderText";
import SinglePropertySection from "./components/propertyDetails/SinglePropertySection";
import Footer from "./components/Footer";

function PropertyDetails() {
  return (
    <div>
      <Preloader />

      <SubHeader />

      <HeaderAreaHeaderSticky />

      <PageHeadingHeaderText />

      <SinglePropertySection />

      <Footer />
    </div>
  );
}

export default PropertyDetails;
