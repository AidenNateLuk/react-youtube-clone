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
  return (
    <>
      <TopBar
        updateSidebarWidth={updateSidebarWidth}
        sidebarWidth={sidebarWidth}
      />
      <div
        className={
          sidebarWidth < 250 ? "side__bar__toggle" : "side__bar__toggle active"
        }
        onClick={updateSidebarWidth}
      ></div>
      <div className="app__container">
        <SideBar sidebarWidth={sidebarWidth} />
        <HomePage updateSidebarWidth={updateSidebarWidth} />
      </div>
    </>
  );
};
export default App;
