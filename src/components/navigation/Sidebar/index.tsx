import "./styles.scss";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
interface SideBarProps {
  sidebarWidth: number;
}
const SideBar: React.FC<SideBarProps> = ({ sidebarWidth }) => {
  return (
    <>
      {sidebarWidth < 250 ? (
        <div className="sidebar closed" style={{ width: sidebarWidth }}>
          <a href="">
            <HomeIcon />
            Home
          </a>
          <a href="">
            <SlideshowIcon />
            Shorts
          </a>
          <a href="">
            <SubscriptionsIcon />
            Subscriptions
          </a>
          <a href="">
            <PermIdentityIcon />
            You
          </a>
        </div>
      ) : (
        <div
          className={sidebarWidth > 100 ? "sidebar open" : "sidebar closed"}
          style={{ width: sidebarWidth }}
        >
          <a href="">
            <HomeIcon />
            Home
          </a>
          <a href="">
            <SlideshowIcon />
            Shorts
          </a>
          <a href="">
            <SubscriptionsIcon />
            Subscriptions
          </a>
          <a href="">
            <PermIdentityIcon />
            You
          </a>
        </div>
      )}
    </>
  );
};

export default SideBar;
