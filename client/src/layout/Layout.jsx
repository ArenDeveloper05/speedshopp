import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import PageBanner from "../components/common/page-banner/PageBanner";

const Layout = ({ children }) => {
  return (
    <>
      {/* Headeri verevi hatvac(component)*/}
      <Header />
        {/*<PageBanner/>*/}
      <main>{children}</main>
      <Footer />
      {/* Footeri nerqevi hatvac(component) */}
    </>
  );
};

export default Layout;
