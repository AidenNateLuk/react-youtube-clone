import "./styles.scss";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
interface AccountSettingsProps {
  handleSettings: () => void;
}
export const AccountSettings: React.FC<AccountSettingsProps> = ({
  handleSettings,
}) => {
  return (
    <div className="settings__container">
      <div className="top">
        <CloseOutlinedIcon onClick={() => handleSettings()} />
        <p>Account</p>
      </div>
      <div className="section first">
        <div className="account">
          <div className="profile-icon"></div>
          <div className="account__details">
            <div className="account__readmore">
              <p>Idan nathanieluk</p>
              <KeyboardArrowDownOutlinedIcon />
            </div>
            <p>@user-ey6rf6wy1q</p>
            <a href="#">Manage your Google Account</a>
          </div>
        </div>
        <div className="settings__path">
          <SwitchAccountOutlinedIcon />
          <p>Your channel</p>
        </div>
        <div className="settings__path">
          <SwitchAccountOutlinedIcon />
          <p>Switch account</p>
        </div>
      </div>
      <div className="section second">
        <div className="settings__path">
          <YouTubeIcon />
          <p>Get Youtube Premium</p>
        </div>
        <div className="settings__path">
          <CurrencyExchangeOutlinedIcon />
          <p>Purchases and memberships</p>
        </div>
        <div className="settings__path">
          <SwitchAccountOutlinedIcon />
          <p>Your data in YouTube</p>
        </div>
      </div>
      <div className="section third">
        <div className="settings__path">
          <SettingsOutlinedIcon />
          <p>Settings</p>
        </div>
      </div>
      <div className="section fourth">
        <div className="settings__path">
          <HelpOutlineOutlinedIcon />
          <p>Help</p>
        </div>
        <div className="settings__path">
          <FeedbackOutlinedIcon />
          <p>Feedback</p>
        </div>
      </div>
      <div className="section fourth">
        <div className="settings__path">
          <SwitchAccountOutlinedIcon />
          <p>Youtube Studio</p>
        </div>
        <div className="settings__path">
          <YouTubeIcon />
          <p>Youtube Music</p>
        </div>
        <div className="settings__path">
          <YouTubeIcon />
          <p>Youtube Kids</p>
        </div>
      </div>
      <div className="policies">
        <a href="https://policies.google.com/privacy?hl=en" target="_blank">
          Privacy Policy
        </a>
        <p>•</p>
        <a href="https://www.youtube.com/t/terms?chromeless=1&gl=IL">
          Terms of Service
        </a>
      </div>
    </div>
  );
};
