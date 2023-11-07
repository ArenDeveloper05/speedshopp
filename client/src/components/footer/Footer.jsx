import "./Footer.scss";
import { infoData } from "./categories";
import { myPageData } from "./mypage";
import { productTagsData } from "./producttags";
import { followUs } from "./followus";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook, faInstagram } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-categories info">
          <div className="title">
            {infoData.map(({ title }) => {
              return <p className="category-title">{title}</p>;
            })}
          </div>
          <div className="category">
            {infoData.map(({ name }) => {
              return (
                <a href="/" className="category-text">
                  {name}
                </a>
              );
            })}
          </div>
        </div>
        <div className="footer-categories my-page">
          <div className="title">
            {myPageData.map(({ title }) => {
              return <p className="category-title">{title}</p>;
            })}
          </div>
          <div className="category">
            {myPageData.map(({ name }) => {
              return (
                <a href="/" className="category-text">
                  {name}
                </a>
              );
            })}
          </div>
        </div>
        <div className="footer-categories product-tags">
          <div className="title">
            {productTagsData.map(({ title }) => {
              return <p className="category-title">{title}</p>;
            })}
          </div>
          <div className="category-tags">
            {productTagsData.map(({ name }) => {
              return <button className="category-button">{name}</button>;
            })}
          </div>
        </div>
        <div className="footer-categories follow-us">
          <div className="title">
            {followUs.map(({ title }) => {
              return <p className="category-title">{title}</p>;
            })}
          </div>
          <div className="category">
            {followUs.map(({ name }) => {
              return (
                <a href="/" className="category-text">
                  {name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
