/* eslint-disable quotes */
import Preloader from "./components/Preloader";
import SubHeader from "./components/SubHeader";
import HeaderAreaHeaderSticky from "./components/HeaderAreaHeaderSticky";
import PageHeadingHeaderText from "./components/contact/PageHeadingHeaderText";
import ContactPageSection from "./components/contact/ContactPageSection";
import Footer from "./components/Footer";

function Contact() {
  return (
    <div>
      <Preloader />

      <SubHeader />

      <HeaderAreaHeaderSticky />

      <PageHeadingHeaderText />

      <ContactPageSection />

      <Footer />
    </div>
  );
}

export default Contact;
