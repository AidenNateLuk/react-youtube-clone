import TopBar from "../navigation/TopBar";
import SideBar from "../navigation/Sidebar";
import { BottomBar } from "../navigation/BottomBar";
import { ReactElement, useState } from "react";
import { AccountSettings } from "../navigation/AccountSettings";
import { toggleSearch } from "../../store/app/NavigationManagement/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
interface LayoutProps {
  children: ReactElement;
  updateSidebarWidth: () => void;
  sidebarWidth: number;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  updateSidebarWidth,
  sidebarWidth,
}) => {
  const dispatch = useDispatch();
  const isSearching = useSelector(
    (state: RootState) => state.search.isSearching
  );
  const handleSearch = () => {
    dispatch(toggleSearch());
  };
  const [notificationState, setNotificationState] = useState(false);
  const updateNotificationState = () => {
    setNotificationState((prevState) => !prevState);
  };

  const [settingState, setSettingState] = useState(false);
  const handleSettings = () => {
    setSettingState((prevState) => !prevState);
  };
  return (
    <div className="app__container">
      {settingState && <AccountSettings handleSettings={handleSettings} />}
      <TopBar
        updateSidebarWidth={updateSidebarWidth}
        sidebarWidth={sidebarWidth}
        updateNotificationState={updateNotificationState}
        notificationState={notificationState}
        handleSettings={handleSettings}
        handleSearch={handleSearch}
        isSearching={isSearching}
      />
      <div
        className={
          sidebarWidth < 175 ? "side__bar__toggle" : "side__bar__toggle active"
        }
        onClick={updateSidebarWidth}
      ></div>
      <div
        className={
          !isSearching ? "search__bar__toggle" : "search__bar__toggle active"
        }
      ></div>
      <SideBar sidebarWidth={sidebarWidth} />
      <div className="app__main">{children}</div>
      <BottomBar />
    </div>
  );
};
