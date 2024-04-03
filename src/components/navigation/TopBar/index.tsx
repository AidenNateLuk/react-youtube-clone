import "./styles.scss";
import LogoWhite from "../../../assets/LogoWhite.svg";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Searchbar from "../Searchbar";
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
          />
          <div className="logo-container">
            <img className="logo" src={LogoWhite} alt="Logo" />
          </div>
        </div>
        <Searchbar
          className="search__container"
          isSearching={isSearching}
          handleSearch={handleSearch}
        />
        <div className="top-r">
          <SearchIcon className="search__icon" onClick={() => handleSearch()} />
          <VideoCallIcon />
          {!notificationState ? (
            <NotificationsNoneIcon onClick={() => updateNotificationState()} />
          ) : (
            <NotificationsIcon onClick={() => updateNotificationState()} />
          )}
          <div className="profile-icon"></div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
