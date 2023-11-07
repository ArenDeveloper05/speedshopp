import FooterInfo from "./footer-info/FooterInfo";
import FooterMyPage from "./footer-mypage/FooterMyPage";
import FooterFollowUs from "./footer-followus/FooterFollowUs";
import FooterProductTags from "./foter-product-tags/FooterProductTags";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      
      <div className="footer-content">
        <FooterInfo />
        <FooterMyPage />
        <FooterProductTags />
        <FooterFollowUs />
      </div>
    </footer>
  );
};

export default Footer;
