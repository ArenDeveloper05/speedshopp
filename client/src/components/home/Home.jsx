import "./Home.scss";
import LeftSideBar from "./left-side-bar/LeftSideBar";
import Main from "./main/Main";
import FilterCustom from "./filter_custom/FilterCustom";

const Home = () => {
  return <div className={'home'}>
    <LeftSideBar/>
    <Main/>
    <FilterCustom/>
  </div>;
};

export default Home;
