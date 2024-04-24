import { HomePage } from "./Homepage";
import TopBar from "./navigation/TopBar";
import SideBar from "./navigation/Sidebar";
import { useState } from "react";
import Selectionbar from "./navigation/Selectionbar";
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
  return (
    <>
      <div className="app__container">
        <TopBar
          updateSidebarWidth={updateSidebarWidth}
          sidebarWidth={sidebarWidth}
          updateNotificationState={updateNotificationState}
          notificationState={notificationState}
        />
        <div
          className={
            sidebarWidth < 175
              ? "side__bar__toggle"
              : "side__bar__toggle active"
          }
          onClick={updateSidebarWidth}
        ></div>
        <Selectionbar updateSidebarWidth={updateSidebarWidth} />
        <SideBar sidebarWidth={sidebarWidth} />
        <div className="app__main">
          <HomePage />
        </div>
      </div>
    </>
  );
};
export default App;
