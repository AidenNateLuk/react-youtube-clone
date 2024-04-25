import React from "react";
import ExploreIcon from "@mui/icons-material/Explore";
import "./styles.scss";
interface SelectorProps {
  updateSidebarWidth: () => void;
}
const Selectionbar: React.FC<SelectorProps> = ({ updateSidebarWidth }) => {
  const dummyArraySorters = [
    { id: 1, subject: "All" },
    { id: 2, subject: "Gaming" },
    { id: 3, subject: "React" },
    { id: 4, subject: "History" },
  ];

  return (
    <div className={"top-bar-bottom "}>
      <div className="bottom__nav__icon__container">
        <ExploreIcon
          className="explore__icon"
          onClick={() => updateSidebarWidth()}
          style={{ color: "white" }}
        />
      </div>
      {dummyArraySorters.map((arrSort) => (
        <button className="bottom__nav__item__container">
          <p key={arrSort.id}>{arrSort.subject}</p>
        </button>
      ))}
    </div>
  );
};

export default Selectionbar;
