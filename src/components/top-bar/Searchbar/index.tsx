import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MicIcon from "@mui/icons-material/Mic";
interface SearchbarProps {
  handleSearch: () => void;
}
const Searchbar: React.FC<SearchbarProps> = ({ handleSearch }) => {
  return (
    <div className="search__container">
      <ArrowBackIcon onClick={() => handleSearch()} />
      <div className="search__bar">
        <input
          type="text"
          className="search__bar__input"
          placeholder="Search Youtube"
        />
        <SearchIcon />
      </div>
      <MicIcon />
    </div>
  );
};

export default Searchbar;
