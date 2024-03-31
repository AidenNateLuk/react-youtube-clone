import "./styles.scss";
import LogoWhite from "../../assets/LogoWhite.svg";
import SearchIcon from "@mui/icons-material/Search";

interface TopBarProps {
  handleSearch: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ handleSearch }) => {
  return (
    <div className="top-bar">
      <img className="logo" src={LogoWhite} alt="Logo" />

      <div className="top-r">
        <SearchIcon onClick={() => handleSearch()} />
        <div className="profile-icon"></div>
      </div>
    </div>
  );
};

export default TopBar;
