import { HomePage } from "./Homepage";
import TopBar from "./navigation/TopBar";
import SideBar from "./navigation/Sidebar";
import { BottomBar } from "./navigation/BottomBar";
import { useState } from "react";
import { AccountSettings } from "./navigation/AccountSettings";
import "./App.scss";
const App: React.FC = () => {
  const [sidebarWidth, setSidebarWidth] = useState(75);

  const updateSidebarWidth = () => {
    setSidebarWidth((prevWidth) => (prevWidth == 75 ? 175 : 75));
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
    <>
      {settingState && <AccountSettings handleSettings={handleSettings} />}
      <div className="app__container">
        <TopBar
          updateSidebarWidth={updateSidebarWidth}
          sidebarWidth={sidebarWidth}
          updateNotificationState={updateNotificationState}
          notificationState={notificationState}
          handleSettings={handleSettings}
        />
        <div
          className={
            sidebarWidth < 175
              ? "side__bar__toggle"
              : "side__bar__toggle active"
          }
          onClick={updateSidebarWidth}
        ></div>

        <SideBar sidebarWidth={sidebarWidth} />
        <div className="app__main">
          <HomePage updateSidebarWidth={updateSidebarWidth} />
        </div>
      </div>
      <BottomBar />
    </>
  );
};
export default App;
