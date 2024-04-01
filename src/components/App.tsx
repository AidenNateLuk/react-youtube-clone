import { HomePage } from "./Homepage";
import TopBar from "./nav-bars/TopBar";
import { useState } from "react";
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
      <div>
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
