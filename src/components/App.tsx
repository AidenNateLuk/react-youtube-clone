import { HomePage } from "./Screens/Homepage";
import TopBar from "./navigation/TopBar";
import SideBar from "./navigation/Sidebar";
import { BottomBar } from "./navigation/BottomBar";
import { ReactElement, useState } from "react";
import { AccountSettings } from "./navigation/AccountSettings";
import { LoginScreen } from "./Screens/LoginScreen";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
    <div className="app__container">
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
    </div>
  );
};
const App: React.FC = () => {
  const [sidebarWidth, setSidebarWidth] = useState(75);
  const updateSidebarWidth = () => {
    setSidebarWidth((prevWidth) => (prevWidth == 75 ? 175 : 75));
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/Home/*"
          element={
            <Layout
              sidebarWidth={sidebarWidth}
              updateSidebarWidth={updateSidebarWidth}
            >
              <Routes>
                <Route
                  index
                  element={<HomePage updateSidebarWidth={updateSidebarWidth} />}
                />
              </Routes>
            </Layout>
          }
        />
        <Route path="/" element={<LoginScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};
export default App;
