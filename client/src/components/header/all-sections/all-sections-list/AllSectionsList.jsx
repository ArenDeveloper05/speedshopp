import { Link } from "react-router-dom";
import { sectionsDataConfig } from "../../../../config";

const AllSectionsList = ({ sections }) => {
  return (
    <div style={{ display: sections }} className="sections">
      {sectionsDataConfig.map(({ id, title }) => {
        return (
          <div className="sectionsLink" key={id}>
            <Link to="/">{title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default AllSectionsList;
