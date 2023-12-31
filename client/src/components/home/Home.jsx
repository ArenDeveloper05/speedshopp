import "./Home.scss";
import LeftSideBar from "./left-side-bar/LeftSideBar";
import Main from "./main/Main";
import FilterCustom from "./filter_custom/FilterCustom";
import Media from "./media/Media";
import BrandsSlider from "./brands-slider/BrandsSlider";

const Home = () => {
  return <div className={'home'}>
    <LeftSideBar/>
    <Main/>
    <FilterCustom/>
    <Media/>
    <BrandsSlider/>
  </div>;
};

export default Home;
