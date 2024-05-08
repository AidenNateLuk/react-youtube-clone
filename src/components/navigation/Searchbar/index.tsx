import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MicIcon from "@mui/icons-material/Mic";
import NorthWestOutlinedIcon from "@mui/icons-material/NorthWestOutlined";
import "./styles.scss";

interface SearchbarProps {
  handleSearch: () => void;
  isSearching: boolean;
}

interface SearchResultProps {
  id: number;
  result: string;
}

const SearchResult: React.FC<SearchResultProps> = ({ id, result }) => {
  return (
    <div className="results__container" key={id}>
      <p className="search__result">{result}</p>
      <div className="completer__container">
        <NorthWestOutlinedIcon
          className="completer__icon"
          style={{ fontSize: 25 }}
        />
      </div>
    </div>
  );
};

const Searchbar: React.FC<SearchbarProps> = ({ handleSearch, isSearching }) => {
  const dummyResults = [
    { id: 1, result: "Minecraft" },
    { id: 2, result: "Playing Minecraft Survival" },
    { id: 3, result: "Playing Minecraft HungerGames" },
    { id: 4, result: "Playing Minecraft Skyblock" },
    { id: 5, result: "Playing Pokemon in Minecraft" },
  ];

  return (
    <div
      className={isSearching ? "search__container open" : "search__container"}
    >
      <div className="search__bar__container">
        <ArrowBackIcon
          onClick={() => handleSearch()}
          className="arrow__icon"
          style={{ color: "white" }}
        />
        <div className="search__bar">
          <input
            type="text"
            className="search__bar__input"
            placeholder="Search YouTube"
          />
          <div className="search__icon__container">
            <SearchIcon className="search__bar__icon" />
          </div>
        </div>
        <div className="mic__container">
          <MicIcon className="mic__icon" style={{ color: "white" }} />
        </div>
      </div>
      <div className="search__results">
        {dummyResults.map((result) => (
          <SearchResult key={result.id} id={result.id} result={result.result} />
        ))}
      </div>
    </div>
  );
};

export default Searchbar;
