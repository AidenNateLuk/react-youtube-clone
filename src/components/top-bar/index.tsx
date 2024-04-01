import "./styles.scss";
import LogoWhite from "../../assets/LogoWhite.svg";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import { useState } from "react";
import Searchbar from "./Searchbar";
import SideBar from "./Sidebar";
const TopBar: React.FC = () => {
  const [isSearching, setIsSearching] = useState(false);
  const handleSearch = () => {
    setIsSearching(!isSearching);
  };
  const [sidebarWidth, setSidebarWidth] = useState(100);
  const updateSidebarWidth = () => {
    console.log(sidebarWidth);
    setSidebarWidth((prevWidth) => (prevWidth == 100 ? 250 : 100));
    console.log(sidebarWidth);
  };
  return (
    <div className="top-bar-container">
      <div className="top-bar-top">
        <div className="logo-container">
          <img className="logo" src={LogoWhite} alt="Logo" />
        </div>
        <SideBar
          updateSidebarWidth={updateSidebarWidth}
          sidebarWidth={sidebarWidth}
        />
        <Searchbar
          className="search__container"
          isSearching={isSearching}
          handleSearch={handleSearch}
        />
        <div className="top-r">
          <SearchIcon className="search__icon" onClick={() => handleSearch()} />
          <div className="profile-icon"></div>
        </div>
      </div>
      <div className="top-bar-bottom">
        <ExploreIcon className="explore__icon" />
      </div>
    </div>
  );
};

export default TopBar;
