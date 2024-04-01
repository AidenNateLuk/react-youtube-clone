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
      {sidebarWidth < 100 ? (
        <div className="sidebar" style={{ width: sidebarWidth }}>
          <MenuIcon className="menu__icon" onClick={updateSidebarWidth} />
          <div>
            <p>smaller than 100</p>
          </div>
        </div>
      ) : (
        <div
          className={sidebarWidth > 100 ? "sidebar open" : "sidebar"}
          style={{ width: sidebarWidth }}
        >
          <MenuIcon
            className="menu__icon"
            onClick={() => updateSidebarWidth()}
          />
          <div>
            <p>larger than 100</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
