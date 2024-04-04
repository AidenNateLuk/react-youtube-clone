import React from "react";
import ExploreIcon from "@mui/icons-material/Explore";
import "./styles.scss";
interface SelectorProps {
  updateSidebarWidth: () => void;
}
const Selectionbar: React.FC<SelectorProps> = ({ updateSidebarWidth }) => {
  return (
    <div className={"top-bar-bottom "}>
      <div className="bottom__nav__icon__container">
        <ExploreIcon
          className="explore__icon"
          onClick={() => updateSidebarWidth()}
          style={{ color: "white" }}
        />
      </div>
      <div className="bottom__nav__item__container">
        <p>All</p>
      </div>
    </div>
  );
};

export default Selectionbar;
