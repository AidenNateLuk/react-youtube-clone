import LogoDark from "../../../../../assets/LogoDark.svg";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";

interface TopBarProps {
  sidebarWidth: number;
  updateSidebarWidth: () => void;
  updateNotificationState: () => void;
  handleSettings: () => void;
  notificationState: boolean;
  handleSearch: () => void;
  isSearching: boolean;
}

const MobileLayout: React.FC<TopBarProps> = ({
  updateSidebarWidth,
  notificationState,
  updateNotificationState,
  handleSettings,
}) => {
  const navigate = useNavigate();
  return (
    <div className="top-bar-container">
      <div className="top-bar-top">
        <div className="top-l">
          <MenuIcon
            className="menu__icon"
            onClick={() => updateSidebarWidth()}
            style={{ color: "white" }}
          />
          <div
            className="logo-container"
            onClick={() => {
              navigate("/Home");
            }}
          >
            <img className="logo" src={LogoDark} alt="Logo" />
          </div>
        </div>
        <div className="top-r">
          <SearchIcon
            className="search__icon"
            onClick={() => {
              navigate("/Searching");
            }}
            style={{ color: "white", fontFamily: "Roboto" }}
            fontSize="medium"
          />
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
          <div className="profile-icon" onClick={() => handleSettings()}></div>
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;
