import "./styles.scss";
// import SlideshowIcon from "@mui/icons-material/Slideshow";
// import HomeIcon from "@mui/icons-material/Home";
// import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
// import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MenuIcon from "@mui/icons-material/Menu";
interface SideBarProps {
  updateSidebarWidth: () => void;
  sidebarWidth: number;
}
const SideBar: React.FC<SideBarProps> = ({
  updateSidebarWidth,
  sidebarWidth,
}) => {
  return (
    <>
      <MenuIcon className="menu__icon" onClick={updateSidebarWidth} />
      {sidebarWidth < 100 ? (
        <div className="sidebar" style={{ width: sidebarWidth }}>
          <div>
            <p>smaller than 100</p>
          </div>
        </div>
      ) : (
        <div className="sidebar" style={{ width: sidebarWidth }}>
          <div>
            <p>larger than 100</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
