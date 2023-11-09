import "./Home.scss";
import LeftSideBar from "./left-side-bar/LeftSideBar";
import Main from "./main/Main";

const Home = () => {
  return <div className={'home'}>
    <LeftSideBar/>
    <Main/>
  </div>;
};

export default Home;
