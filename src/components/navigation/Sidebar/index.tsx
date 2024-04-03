import "./styles.scss";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
interface SideBarProps {
  sidebarWidth: number;
}
const SideBar: React.FC<SideBarProps> = ({ sidebarWidth }) => {
  return (
    <>
      {sidebarWidth < 175 ? (
        <div className="sidebar closed">
          <div className="sidebar__content">
            <a href="">
              <HomeIcon className="sidebar__icon" />
              Home
            </a>
            <a href="">
              <SlideshowIcon className="sidebar__icon" />
              Shorts
            </a>
            <a href="">
              <SubscriptionsIcon className="sidebar__icon" />
              Subscriptions
            </a>
            <a href="">
              <PermIdentityIcon className="sidebar__icon" />
              You
            </a>
          </div>
        </div>
      ) : (
        <div className={sidebarWidth > 75 ? "sidebar open" : "sidebar closed"}>
          <div className="sidebar__content">
            <div className="nav__section">
              <a href="">
                <HomeIcon className="sidebar__icon" />
                Home
              </a>
              <a href="">
                <SlideshowIcon className="sidebar__icon" />
                Shorts
              </a>
              <a href="">
                <SubscriptionsIcon className="sidebar__icon" />
                Subscriptions
              </a>
            </div>
            <div className="user__section">
              <div className="user__title">
                <h3>You</h3>
                <KeyboardArrowRightIcon className="sidebar__icon" />
              </div>
              <a href="">Your channel</a>
              <a href="">History</a>
              <a href="">Your videos</a>
              <a href="">Watch later</a>
              <a href="">Liked videos</a>
            </div>
            <div className="subs__section">
              <div className="subscribed__channel">
                <div className="channel__photo">
                  <img />
                </div>
                <div className="channel__name">
                  <p>Test Channel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
