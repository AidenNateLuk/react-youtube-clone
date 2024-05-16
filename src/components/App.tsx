import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/layout";
import { toggleSidebarWidth } from "../store/app/SidebarManagement/sidebarwidthSlice";
import { LoginScreen } from "./Screens/LoginScreen";
import ResultsScreen from "./Screens/ResultsScreen";
import { VideoScreen } from "./Screens/VideoScreen";
import { HomePage } from "./Screens/Homepage";
import Searchbar from "./navigation/Searchbar";

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
      <Layout
        sidebarWidth={sidebarWidth}
        updateSidebarWidth={updateSidebarWidth}
      >
        <Routes>
          <Route path="Searching" element={<Searchbar />} />
          <Route path="/Home/*" element={<HomePage />} />
          <Route path="/results/:query" element={<ResultsScreen />} />{" "}
          <Route path="/Watch/*" element={<VideoScreen />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
