/* eslint-disable quotes */

import Preloader from "./components/Preloader";
import SubHeader from "./components/SubHeader";
import HeaderAreaHeaderSticky from "./components/HeaderAreaHeaderSticky";
import PageHeadingHeaderText from "./components/contact/PageHeadingHeaderText";
import SectionProperties from "./components/properties/SectionProperties";
import Footer from "./components/Footer";

function Property() {
  return (
    <div>
      <Preloader />

      <SubHeader />

      <HeaderAreaHeaderSticky />

      <PageHeadingHeaderText />

      <SectionProperties />

      <Footer />
    </div>
  );
}

export default Property;
