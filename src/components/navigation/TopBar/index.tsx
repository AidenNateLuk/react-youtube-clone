import { useState } from "react";
import "./styles.scss";
import LogoDark from "../../../assets/LogoDark.svg";
import SearchIcon from "@mui/icons-material/Search";
import Searchbar from "../Searchbar";
import ExploreIcon from "@mui/icons-material/Explore";
import MenuIcon from "@mui/icons-material/Menu";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotificationsIcon from "@mui/icons-material/Notifications";
interface TopBarProps {
  sidebarWidth: number;
  updateSidebarWidth: () => void;
  updateNotificationState: () => void;
  notificationState: boolean;
}
const TopBar: React.FC<TopBarProps> = ({
  updateSidebarWidth,
  notificationState,
  updateNotificationState,
}) => {
  const [isSearching, setIsSearching] = useState(false);
  const handleSearch = () => {
    setIsSearching(!isSearching);
  };
  return (
    <div className="top-bar-container">
      <div className="top-bar-top">
        <div className="top-l">
          <MenuIcon
            className="menu__icon"
            onClick={() => updateSidebarWidth()}
            style={{ color: "white" }}
          />
          <div className="logo-container">
            <img className="logo" src={LogoDark} alt="Logo" />
          </div>
        </div>
        <Searchbar
          className="search__component"
          isSearching={isSearching}
          handleSearch={handleSearch}
        />
        <div className="top-r">
          <SearchIcon className="search__icon" onClick={() => handleSearch()} />
          <VideoCallIcon
            className="create__video__icon"
            style={{ color: "white" }}
          />
          {!notificationState ? (
            <NotificationsNoneIcon
              style={{ color: "white" }}
              className="notifications__icon"
              onClick={() => updateNotificationState()}
            />
          ) : (
            <NotificationsIcon
              style={{ color: "white" }}
              className="notifications__icon"
              onClick={() => updateNotificationState()}
            />
          )}
          <div className="profile-icon"></div>
        </div>
      </div>
      <div className={"top-bar-bottom "}>
        <div className="bottom__nav__icon__container">
          <ExploreIcon
            className="explore__icon"
            onClick={() => updateSidebarWidth()}
          />
        </div>
        <div className="bottom__nav__item__container">
          <p>All</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
