import "./styles.scss";
// import SlideshowIcon from "@mui/icons-material/Slideshow";
// import HomeIcon from "@mui/icons-material/Home";
// import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
// import PermIdentityIcon from "@mui/icons-material/PermIdentity";
interface SideBarProps {
  sidebarWidth: number;
}
const SideBar: React.FC<SideBarProps> = ({ sidebarWidth }) => {
  return (
    <>
      {sidebarWidth < 100 ? (
        <div className="sidebar" style={{ width: sidebarWidth }}></div>
      ) : (
        <div
          className={sidebarWidth > 100 ? "sidebar open" : "sidebar"}
          style={{ width: sidebarWidth }}
        ></div>
      )}
    </>
  );
};

export default SideBar;
