import React from "react";
import ExploreIcon from "@mui/icons-material/Explore";
import "./styles.scss";

interface SelectorProps {
  updateSidebarWidth: () => void;
  selectedSorters: { id: number; subject: string; selected: boolean }[];
  handleSorterClick: (index: number) => void;
}

const Selectionbar: React.FC<SelectorProps> = ({
  updateSidebarWidth,
  selectedSorters,
  handleSorterClick,
}) => {
  return (
    <div className={"top-bar-bottom "}>
      <div className="bottom__nav__icon__container">
        <ExploreIcon
          className="explore__icon"
          onClick={updateSidebarWidth}
          style={{ color: "white" }}
        />
      </div>
      {selectedSorters.map((arrSort, index) => (
        <button
          onClick={() => handleSorterClick(index)}
          key={arrSort.id}
          className="bottom__nav__item__container"
          style={{
            backgroundColor: arrSort.selected
              ? "white"
              : "hsla(0, 0%, 50%, 0.436)",
            color: arrSort.selected ? "black" : "white",
          }}
        >
          <p>{arrSort.subject}</p>
        </button>
      ))}
    </div>
  );
};

export default Selectionbar;
