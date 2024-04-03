import { HomePage } from "./Homepage";
import TopBar from "./navigation/TopBar";
import SideBar from "./navigation/Sidebar";
import { useState } from "react";
import "./App.scss";
const App: React.FC = () => {
  const [sidebarWidth, setSidebarWidth] = useState(100);
  const updateSidebarWidth = () => {
    setSidebarWidth((prevWidth) => (prevWidth == 100 ? 250 : 100));
  };
  const [notificationState, setNotificationState] = useState(false);
  const updateNotificationState = () => {
    setNotificationState((prevState) => !prevState);
  };
  return (
    <div className="app__container">
      <TopBar
        updateSidebarWidth={updateSidebarWidth}
        sidebarWidth={sidebarWidth}
        updateNotificationState={updateNotificationState}
        notificationState={notificationState}
      />
      <div
        className={
          sidebarWidth < 250 ? "side__bar__toggle" : "side__bar__toggle active"
        }
        onClick={updateSidebarWidth}
      ></div>
      <div className="app__main">
        <SideBar sidebarWidth={sidebarWidth} />
        <HomePage
          updateSidebarWidth={updateSidebarWidth}
          sidebarWidth={sidebarWidth}
        />
      </div>
    </div>
  );
};
export default App;
