import TopBar from "./components/top-bar";
import { useState } from "react";
import Searchbar from "./components/top-bar/Searchbar";
const App: React.FC = () => {
  const [isSearching, setIsSearching] = useState(false);
  const handleSearch = () => {
    setIsSearching(!isSearching);
  };

  return (
    <div>
      {isSearching ? (
        <Searchbar handleSearch={handleSearch} />
      ) : (
        <TopBar handleSearch={handleSearch} />
      )}
      hello
    </div>
  );
};

export default App;
