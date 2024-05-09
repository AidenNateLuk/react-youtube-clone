import { HomePage } from "./Screens/Homepage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { LoginScreen } from "./Screens/LoginScreen";
import { Layout } from "./Layout/layout";
import { VideoScreen } from "./Screens/VideoScreen";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.scss";
import { toggleSidebarWidth } from "../store/app/SidebarManagement/sidebarwidthSlice";

const App: React.FC = () => {
  const sidebarWidth = useSelector(
    (state: RootState) => state.sidebar.sidebarWidth
  );

  const dispatch = useDispatch();
  const updateSidebarWidth = () => {
    dispatch(toggleSidebarWidth());
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
        <Route
          path="/Watch/*"
          element={
            <Layout
              sidebarWidth={sidebarWidth}
              updateSidebarWidth={updateSidebarWidth}
            >
              <Routes>
                <Route element={<VideoScreen />} />
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
