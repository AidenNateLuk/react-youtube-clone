import { HomePage } from "./Screens/Homepage";
import TopBar from "./navigation/TopBar";
import SideBar from "./navigation/Sidebar";
import { BottomBar } from "./navigation/BottomBar";
import { ReactElement, useState } from "react";
import { AccountSettings } from "./navigation/AccountSettings";
import { LoginScreen } from "./Screens/LoginScreen";
import "./App.scss";

interface LayoutProps {
  children: ReactElement;
  updateSidebarWidth: () => void;
  sidebarWidth: number;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  updateSidebarWidth,
  sidebarWidth,
}) => {
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
      <TopBar
        updateSidebarWidth={updateSidebarWidth}
        sidebarWidth={sidebarWidth}
        updateNotificationState={updateNotificationState}
        notificationState={notificationState}
        handleSettings={handleSettings}
      />
      <div
        className={
          sidebarWidth < 175 ? "side__bar__toggle" : "side__bar__toggle active"
        }
        onClick={updateSidebarWidth}
      ></div>

      <SideBar sidebarWidth={sidebarWidth} />
      <div className="app__main">{children}</div>
      <BottomBar />
    </>
  );
};
const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn((prevState) => !prevState);
  };
  const [sidebarWidth, setSidebarWidth] = useState(75);
  const updateSidebarWidth = () => {
    setSidebarWidth((prevWidth) => (prevWidth == 75 ? 175 : 75));
  };
  return (
    <>
      <div className="app__container">
        {isLoggedIn ? (
          <Layout
            sidebarWidth={sidebarWidth}
            updateSidebarWidth={updateSidebarWidth}
          >
            <HomePage updateSidebarWidth={updateSidebarWidth} />
          </Layout>
        ) : (
          <LoginScreen handleLogin={handleLogin} />
        )}
      </div>
    </>
  );
};
export default App;
