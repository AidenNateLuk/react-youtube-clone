import "./styles.scss";
import MobileLayout from "./Layouts/mobile";
interface SideBarProps {
  sidebarWidth: number;
}
const SideBar: React.FC<SideBarProps> = ({ sidebarWidth }) => {
  return (
    <>
      <MobileLayout sidebarWidth={sidebarWidth} />
    </>
  );
};

export default SideBar;
