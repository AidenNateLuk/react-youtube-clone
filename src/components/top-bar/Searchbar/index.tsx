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
        <ArrowBackIcon onClick={() => handleSearch()} className="arrow__icon" />
        <div className="search__bar">
          <input
            type="text"
            className="search__bar__input"
            placeholder="Search Youtube"
          />
          <SearchIcon className="search__icon" />
        </div>
        <MicIcon className="mic__icon" />
      </div>
    </>
  );
};

export default Searchbar;
