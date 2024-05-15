import LogoDark from "../../../../../assets/LogoDark.svg";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsModal from "./SettingsModal";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { dummyVideos } from "../../../../../DummyData/dummyvideos";
import "./styles.scss";
import { useState } from "react";
interface TopBarProps {
  sidebarWidth: number;
  updateSidebarWidth: () => void;
  updateNotificationState: () => void;
  handleSettings: () => void;
  notificationState: boolean;
  isSearching: boolean;
}
const DesktopLayout: React.FC<TopBarProps> = ({
  updateSidebarWidth,
  notificationState,
  updateNotificationState,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the modal state
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="top-bar-container">
        <div className="top-l">
          <button className="menu__icon" onClick={() => updateSidebarWidth()}>
            <MenuIcon style={{ color: "white" }} />
          </button>
          <div className="logo-container">
            <img className="logo" src={LogoDark} alt="Logo" />
          </div>
        </div>
        <div className="top__middle">
          <Autocomplete
            className="desktop__searchbar"
            freeSolo
            disableClearable
            options={dummyVideos.map((video) => video.title)}
            renderInput={(video) => (
              <TextField
                {...video}
                InputProps={{
                  ...video.InputProps,
                  type: "search",
                  className: "blinking-input",
                }}
              />
            )}
          />

          <div className="icon__container">
            <SearchIcon
              className="search__icon"
              style={{ color: "white", fontFamily: "Roboto" }}
              fontSize="medium"
            />
          </div>
        </div>
        <div className="top-r">
          <button className="create__video__icon">
            <VideoCallIcon style={{ color: "white" }} />
          </button>
          <button
            className="notifications__icon"
            onClick={() => updateNotificationState()}
          >
            {!notificationState ? (
              <NotificationsNoneIcon style={{ color: "white" }} />
            ) : (
              <NotificationsIcon style={{ color: "white" }} />
            )}
          </button>
          <div className="profile-icon" onClick={toggleModal}></div>
        </div>
      </div>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <SettingsModal />
          </div>
        </div>
      )}
    </>
  );
};

export default DesktopLayout;
