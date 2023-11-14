import { footerFollowUsConfig } from "../../../config";
import OnlineIcons from "../foter-product-tags/online-icons/OnlineIcons";

const FooterFollowUs = () => {
  return (
    <div className="footer-categories follow-us">
      <div className="title">
        <p className="category-title">
          {footerFollowUsConfig &&
            footerFollowUsConfig.title &&
            footerFollowUsConfig.title}
        </p>
      </div>
      <div className="category">
        {footerFollowUsConfig &&
          footerFollowUsConfig.list &&
          footerFollowUsConfig.list.map(({ id, title }) => {
            return (
              <a href="/" className="category-text" key={id}>
                {title}
              </a>
            );
          })}
      </div>
      <OnlineIcons />
    </div>
  );
};

export default FooterFollowUs;
