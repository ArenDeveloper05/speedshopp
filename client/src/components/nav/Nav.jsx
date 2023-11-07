import { navConfig } from "../../config";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="header-bottom-content">
      <div className="menu">
        {navConfig.map(({ id, title, link }) => {
          return (
            <Link to={link} key={id}>
              {title}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
