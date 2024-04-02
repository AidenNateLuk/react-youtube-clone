import { HomePage } from "./Homepage";
import TopBar from "./navigation/TopBar";
import { useState } from "react";
import "./App.scss";
const App: React.FC = () => {
  const [sidebarWidth, setSidebarWidth] = useState(100);
  const openSidebarWidth = () => {
    setSidebarWidth(250);
  };
  const closeSidebarWidth = () => {
    setSidebarWidth(100);
  };
  return (
    <div className="app__container">
      <div className="header">
        <TopBar
          openSidebarWidth={openSidebarWidth}
          sidebarWidth={sidebarWidth}
        />
      </div>
      <HomePage closeSidebarWidth={closeSidebarWidth} />
    </div>
  );
};
export default App;
