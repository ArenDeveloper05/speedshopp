import "./BottomSection.scss";
import { Link } from "react-router-dom";
import { bottomSectionConfig } from "../../config";

const BottomSection = () => {
  return (
    <div className="bottom-section-content">
      <div className="bottom-section-info">
        <p>
          © 2023 <span className="speedshop">Speedshop.am</span> Բոլոր
          իրավունքները պաշտպանված են. Ձևավորումը`
        </p>
        <Link className="link" to={"/"}>
          Link
        </Link>
      </div>
      <div className="online-payment">
        {bottomSectionConfig.map(({ id, image }) => {
          return <img key={id} className="payment-method" src={image} alt="" />;
        })}
      </div>
    </div>
  );
};

export default BottomSection;
