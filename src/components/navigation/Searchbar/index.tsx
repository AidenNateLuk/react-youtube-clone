import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MicIcon from "@mui/icons-material/Mic";
import "./styles.scss";
interface SearchbarProps {
  handleSearch: () => void;
  isSearching: boolean;
  className: string;
}
const Searchbar: React.FC<SearchbarProps> = ({ handleSearch, isSearching }) => {
  return (
    <>
      <div
        className={isSearching ? "search__container open" : "search__container"}
      >
        <ArrowBackIcon
          onClick={() => handleSearch()}
          className="arrow__icon"
          style={{ color: "white" }}
        />
        <div className="search__bar">
          <input
            type="text"
            className="search__bar__input"
            placeholder="Search Youtube"
          />
          <div className="search__icon__container">
            <SearchIcon className="search__bar__icon" />
          </div>
        </div>
        <MicIcon className="mic__icon" style={{ color: "white" }} />
      </div>
    </>
  );
};

export default Searchbar;
