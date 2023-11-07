import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSort } from "@fortawesome/free-solid-svg-icons";

import AllSectionsList from "./all-sections-list/AllSectionsList";

const AllSections = ({ sections, setSections }) => {
  return (
    <div className="all-sections">
      <div
        className="arrows"
        onClick={() => {
          if (sections === "none") {
            setSections("flex");
          } else {
            setSections("none");
          }
        }}
      >
        <p>Բոլոր բաժինները</p>
        <FontAwesomeIcon icon={faSort} />
        <AllSectionsList sections={sections} />
      </div>
      <div className="search-logo">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  );
};

export default AllSections;
