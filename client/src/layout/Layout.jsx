import BottomSection from "../components/bottom-section/BottomSection";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import UpperPart from "../components/upper-part/UpperPart";

const Layout = ({ children }) => {
  return (
    <>
      <UpperPart/>
      <Header />
      <main>{children}</main>
      <Footer />
      <BottomSection/>
    </>
  );
};

export default Layout;
