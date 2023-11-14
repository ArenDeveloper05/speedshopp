import { footerInfoConfig } from "../../../config";
import { useTranslation } from "react-i18next";

const FooterInfo = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="footer-categories info">
      <div className="title">
        <p className="category-title">
          {footerInfoConfig && footerInfoConfig.title && footerInfoConfig.title}
        </p>
      </div>
      <div className="category">
        {footerInfoConfig &&
          footerInfoConfig.list &&
          footerInfoConfig.list.map(({ id, title }) => {
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

export default FooterInfo;
