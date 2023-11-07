import { footerProductTagsConfig } from "../../../config";

const FooterProductTags = () => {
  return (
    <div className="footer-categories product-tags">
      <div className="title">
        <p className="category-title">
          {footerProductTagsConfig &&
            footerProductTagsConfig.title &&
            footerProductTagsConfig.title}
        </p>
      </div>
      <div className="category-tags">
        {footerProductTagsConfig &&
          footerProductTagsConfig.list &&
          footerProductTagsConfig.list.map(({ id, title }) => {
            return (
              <button className="category-button" key={id}>
                {title}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default FooterProductTags;
