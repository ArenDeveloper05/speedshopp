import { footerMyPageConfig } from "../../../config";

const FooterMyPage = () => {
  return (
    <div className="footer-categories my-page">
      <div className="title">
        <p className="category-title">
          {footerMyPageConfig &&
            footerMyPageConfig.title &&
            footerMyPageConfig.title}
        </p>
      </div>
      <div className="category">
        {footerMyPageConfig &&
          footerMyPageConfig.list &&
          footerMyPageConfig.list.map(({ id, title }) => {
            return (
              <a href="/" className="category-text" key={id}>
                {title}
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default FooterMyPage;
