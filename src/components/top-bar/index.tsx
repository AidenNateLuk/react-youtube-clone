import { useState } from "react";
import "./styles.scss";
import LogoWhite from "../../assets/LogoWhite.svg";
import SearchIcon from "@mui/icons-material/Search";

function TopBar() {
  const [isSearching, setIsSearching] = useState(false);
  function handleSearch() {
    setIsSearching(!isSearching);
  }
  return (
    <div className="top-bar">
      <img className="logo" src={LogoWhite} alt="Logo" />
      <input
        type="text"
        name="search"
        id=""
        className={isSearching ? "open" : ""}
      />
      <div className="top-r">
        <SearchIcon onClick={() => handleSearch()} />
        <div className="profile-icon"></div>
      </div>
    </div>
  );
}

export default TopBar;
