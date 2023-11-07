import "./Header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faSort, faHeart } from '@fortawesome/free-solid-svg-icons'
import { menuData } from "./menu";
import { sectionsData } from "./sections";
import { useState } from "react";

const Header = () => {
  const [sections, setSections] = useState("none")
  
  return <header>
    <div className="header-content">
      <div className="header-top-content">
        <div className="logo">
          <a href="/"><img src="/logo1.svg" alt="" /></a>
        </div>
        <div className="search">
          <input className="search-input" type="text" placeholder="Որոնում․․․" onChange={(e) => {

          }}/>
          <div className="all-sections" >
            <div className="arrows" onClick={() => {
            if (sections === "none") {
              setSections("flex")
            }else{
              setSections("none")
            }
          }}>
            <p>Բոլոր բաժինները</p>
              <FontAwesomeIcon icon={faSort} />
              <div style={{display:sections}} className="sections">
                {
                  sectionsData.map(({id, name}) => {
                    return(
                      <div className="sectionsLink">
                        <a href="/">{name}</a>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="search-logo">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
        </div>
        <div className="likes">
          <FontAwesomeIcon className="heart" icon={faHeart}/>
        </div>
      </div>
        <div className="header-bottom-content">
            <div className="menu">
              {
                  menuData.map(({name}) => {
                      return (
                        <a href="/">{name}</a>
                      )
                   
                  })
              }
            </div>
        </div>
    </div>
  </header>;
};

export default Header;
