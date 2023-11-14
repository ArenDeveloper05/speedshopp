import { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import AllSections from "./all-sections/AllSections";
import Nav from "../nav/Nav";

import "./Header.scss";
import useOutsideClick from "../../utils/hooks/useOutsideClisk";

import speedshopLogo from "../../assets/logos/logo.svg";

const Header = () => {
  const [sections, setSections] = useState("none");
  const sectionsRef = useRef(null);
  useOutsideClick(sectionsRef, () => {
    setSections("none");
  });

  return (
    <header>
      <div className="header-content">
        <div className="header-top-content">
          <div className="logo">
            <a href="/">
              <img src={speedshopLogo} alt="speedshop-logo" />
            </a>
          </div>
          <div className="search">
            <input
              className="search-input"
              type="text"
              placeholder="Որոնում․․․"
              onChange={(e) => {}}
            />
            <div ref={sectionsRef}>
              <AllSections sections={sections} setSections={setSections} />
            </div>
          </div>
          <div className="likes">
            <FontAwesomeIcon className="heart" icon={faHeart} />
          </div>
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
