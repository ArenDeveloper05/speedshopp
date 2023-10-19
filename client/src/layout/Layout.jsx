import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Layout = ({ children }) => {
  return (
    <>
      {/* Headeri verevi hatvac(component)*/}
      <Header />
      <main>{children}</main>
      <Footer />
      {/* Footeri nerqevi hatvac(component) */}
    </>
  );
};

export default Layout;
