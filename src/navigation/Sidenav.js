import "./Sidenav.css";
import insta from "../img/insta-icon.png";
import MoreComponent from "./more-component/MoreComponent";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SideIcon from "./sidenavicon";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <img className="sidenav__logo" src={insta} alt="none" />

      <div className="sidenav__buttons">
        {/* <button className="sidenav__button">    //////   default form
          <HomeIcon />
          <span>Home</span>
        </button> */}

        
        {/* ////// using props */}
        <SideIcon name={"Home"} icon={<HomeIcon />} />
        <SideIcon name={"Search"} icon={<SearchIcon />} />
        <SideIcon name={"Explore"} icon={<ExploreIcon />} />
        <SideIcon name={"Reels"} icon={<SlideshowIcon />} />
        <SideIcon name={"Messeges"} icon={<LocalPostOfficeIcon />} />
        <SideIcon name={"Notifications"} icon={<NotificationsActiveIcon />} />
        <SideIcon name={"Create"} icon={<AddCircleIcon />} />
      </div>

      <MoreComponent />
    </div>
  );
};

export default Sidenav;
