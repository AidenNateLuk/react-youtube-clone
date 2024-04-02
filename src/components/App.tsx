import { HomePage } from "./Homepage";
import TopBar from "./navigation/TopBar";
import SideBar from "./navigation/Sidebar";
import { useState } from "react";
import "./App.scss";
const App: React.FC = () => {
  const [sidebarWidth, setSidebarWidth] = useState(100);
  const updateSidebarWidth = () => {
    console.log(sidebarWidth);
    setSidebarWidth((prevWidth) => (prevWidth == 100 ? 250 : 100));
    console.log(sidebarWidth);
  };
  return (
    <div className="app__container">
      <div className="header">
        <TopBar
          updateSidebarWidth={updateSidebarWidth}
          sidebarWidth={sidebarWidth}
        />
      </div>
      <SideBar sidebarWidth={sidebarWidth} />
      <div
        className={
          sidebarWidth < 250 ? "side__bar__toggle" : "side__bar__toggle active"
        }
        onClick={updateSidebarWidth}
      >
        <HomePage updateSidebarWidth={updateSidebarWidth} />
      </div>
    </div>
  );
};
export default App;
