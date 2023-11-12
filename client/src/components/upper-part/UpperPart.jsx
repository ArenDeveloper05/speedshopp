import "./UpperPart.scss";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { upperPartConfig } from "../../config";

import useOutsideClick from "../../utils/hooks/useOutsideClisk";

const UpperPart = () => {
  const [languageChange, setLanguageChange] = useState("none");
  const languageRef = useRef(null);
  useOutsideClick(languageRef, () => {
    setLanguageChange("none");
  });
  return (
    <div className="upper-part">
      <div className="upper-part-content">
        <div className="tel">
          <Link className="tel-number" style={{ color: "white" }} to={"/"}>
            <BsFillTelephoneFill /> + 123 456 789
          </Link>
        </div>
        <div className="email">
          <Link style={{ color: "white" }} to={"/"}>
            info@speedshop.am
          </Link>
        </div>
      </div>
      <div className="account-content">
        <div className="account-my-page">
          <Link className="account" to={"/"}>
            <AiFillLock style={{ fontSize: "18px" }} /> Իմ Էջը
          </Link>
        </div>
        <div className="language">
          <p
            ref={languageRef}
            onClick={() => {
              if (languageChange === "none") {
                setLanguageChange("flex");
              } else setLanguageChange("none");
            }}
          >
            Հայերեն
            <div style={{ display: languageChange }} className="languages">
              {upperPartConfig.map(({ id, name }) => {
                return (
                  <Link className="language-links" to={"/"} key={id}>
                    {name}
                  </Link>
                );
              })}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpperPart;
