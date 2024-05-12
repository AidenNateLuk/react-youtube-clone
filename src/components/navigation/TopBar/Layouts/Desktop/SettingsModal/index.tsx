import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import "./styles.scss";

const SettingsModal = () => {
  return (
    <div className="modal__container">
      <div className="section first">
        <div className="account">
          <div className="profile-icon"></div>
          <div className="account__details">
            <div className="account__readmore">
              <p>Idan nathanieluk</p>
            </div>
            <p>@user-ey6rf6wy1q</p>
            <a href="#">View your channel</a>
          </div>
        </div>
        <div className="settings__path">
          <SwitchAccountOutlinedIcon />
          <p>Google Account</p>
        </div>
        <div className="settings__path">
          <SwitchAccountOutlinedIcon />
          <p>Switch account</p>
        </div>
        <div className="settings__path">
          <LogoutTwoToneIcon />
          <p>Log Out</p>
        </div>
      </div>
      <div className="section second">
        <div className="settings__path">
          <SwitchAccountOutlinedIcon />
          <p>Youtube Studio</p>
        </div>
        <div className="settings__path">
          <CurrencyExchangeOutlinedIcon />
          <p>Purchases and memberships</p>
        </div>
      </div>
      <div className="section third">
        <div className="settings__path">
          <SwitchAccountOutlinedIcon />
          <p>Your data in YouTube</p>
        </div>
        <div className="settings__path">
          <SwitchAccountOutlinedIcon />
          <p>Appearance: </p>
        </div>
        <div className="settings__path">
          <SwitchAccountOutlinedIcon />
          <p>Language: English</p>
        </div>
        <div className="settings__path">
          <SwitchAccountOutlinedIcon />
          <p>Restricted Mode: Off</p>
        </div>
        <div className="settings__path">
          <SwitchAccountOutlinedIcon />
          <p>Location: Israel</p>
        </div>
        <div className="settings__path">
          <SwitchAccountOutlinedIcon />
          <p>Keyboard shortcuts</p>
        </div>
      </div>
      <div className="section fourth">
        <div className="settings__path">
          <SettingsOutlinedIcon />
          <p>Settings</p>
        </div>
      </div>
      <div className="section fifth">
        <div className="settings__path">
          <HelpOutlineOutlinedIcon />
          <p>Help</p>
        </div>
        <div className="settings__path">
          <FeedbackOutlinedIcon />
          <p>Feedback</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
