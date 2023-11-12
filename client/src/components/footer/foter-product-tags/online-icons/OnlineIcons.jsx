import "./OnlineIcons.scss";
import { Link } from "react-router-dom";
import { footerFollowUsConfig } from "../../../../config";


const OnlineIcons = () => {
  return (
    <div className="online-icons">
      {footerFollowUsConfig &&
        footerFollowUsConfig.icons &&
        footerFollowUsConfig.icons.map(({ id, icon, link }) => {
          return (
            <div key={id} className="online-icon">
              <Link className="fa-icons-online"  to={link}>{icon}</Link>
            </div>
          );
        })}
    </div>
  );
};

export default OnlineIcons;
