import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MicIcon from "@mui/icons-material/Mic";
import NorthWestOutlinedIcon from "@mui/icons-material/NorthWestOutlined";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  initialState,
  setSearch,
} from "../../../store/app/NavigationManagement/searchSlice";
import useBookSearch from "../../useSearch";
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

const Searchbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearch(false));
    const encodedQuery = encodeURIComponent(query);
    console.log("Navigating to:", `/results?query=${encodedQuery}`);
    navigate(`/results?query=${encodeURIComponent(searchQuery)}`);
  };
  const { query } = useBookSearch(searchQuery, 1);
  const dummyResults = [
    { id: 1, result: "Minecraft" },
    { id: 2, result: "Playing Minecraft Survival" },
    { id: 3, result: "Playing Minecraft HungerGames" },
    { id: 4, result: "Playing Minecraft Skyblock" },
    { id: 5, result: "Playing Pokemon in Minecraft" },
  ];

  return (
    <div
      className={initialState ? "search__container open" : "search__container"}
    >
      <div className="search__bar__container">
        <ArrowBackIcon
          onClick={() => navigate("/Home")}
          className="arrow__icon"
          style={{ color: "white" }}
        />
        <div className="search__bar">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="search__bar__input"
              placeholder="Search YouTube"
              value={query}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="search__icon__container">
              <button type="submit">
                <SearchIcon className="search__bar__icon" />
              </button>
            </div>
          </form>
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
