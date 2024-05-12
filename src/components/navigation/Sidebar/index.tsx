import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import { changeLayout } from "../../../store/app/LayoutManagement/layoutslice";
import "./styles.scss";
import MobileLayout from "./Layouts/mobile";
import DesktopLayout from "./Layouts/desktop";
interface SideBarProps {
  sidebarWidth: number;
}
const SideBar: React.FC<SideBarProps> = ({ sidebarWidth }) => {
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
        <MobileLayout sidebarWidth={sidebarWidth} />
      ) : (
        <DesktopLayout sidebarWidth={sidebarWidth} />
      )}
    </>
  );
};

export default SideBar;
