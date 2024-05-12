import "./styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import { useCallback, useEffect } from "react";
import { changeLayout } from "../../../store/app/LayoutManagement/layoutslice";
import MobileLayout from "./Layouts/Mobile";
import DesktopLayout from "./Layouts/Desktop";

interface TopBarProps {
  sidebarWidth: number;
  updateSidebarWidth: () => void;
  updateNotificationState: () => void;
  handleSettings: () => void;
  notificationState: boolean;
  handleSearch: () => void;
  isSearching: boolean;
}

const TopBar: React.FC<TopBarProps> = ({
  sidebarWidth,
  updateSidebarWidth,
  updateNotificationState,
  handleSettings,
  notificationState,
  handleSearch,
  isSearching,
}) => {
  const layoutHandler = useSelector((state: RootState) => state.layout);
  const dispatch = useDispatch();

  const handleResize = useCallback(() => {
    const screenWidth = window.innerWidth;
    dispatch(changeLayout(screenWidth <= 768));
  }, [dispatch]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch, handleResize]);

  const isSmallScreen = layoutHandler.isSmallScreen;

  return (
    <>
      {isSmallScreen ? (
        <MobileLayout
          isSearching={isSearching}
          handleSearch={handleSearch}
          notificationState={notificationState}
          handleSettings={handleSettings}
          sidebarWidth={sidebarWidth}
          updateSidebarWidth={updateSidebarWidth}
          updateNotificationState={updateNotificationState}
        />
      ) : (
        <DesktopLayout
          isSearching={isSearching}
          notificationState={notificationState}
          handleSettings={handleSettings}
          sidebarWidth={sidebarWidth}
          updateSidebarWidth={updateSidebarWidth}
          updateNotificationState={updateNotificationState}
        />
      )}
    </>
  );
};

export default TopBar;
