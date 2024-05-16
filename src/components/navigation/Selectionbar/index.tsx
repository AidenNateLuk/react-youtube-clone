import React, { useEffect, useCallback, useState, useRef } from "react";
import ExploreIcon from "@mui/icons-material/Explore";
import "./styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState, selectSidebarWidth } from "../../../store/store";
import { changeLayout } from "../../../store/app/LayoutManagement/layoutslice";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

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
  const sidebarWidth = useSelector(selectSidebarWidth);
  const layoutHandler = useSelector((state: RootState) => state.layout);
  const dispatch = useDispatch();

  const handleResize = useCallback(() => {
    const screenWidth = window.innerWidth;
    dispatch(changeLayout(screenWidth <= 768));
  }, [dispatch]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch, handleResize]);
  const isSmallScreen = layoutHandler.isSmallScreen;

  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const [translate, setTranslate] = useState(0);
  useEffect(() => {
    if (contentRef.current && containerRef.current) {
      const remainingSpace =
        contentRef.current.scrollWidth -
        containerRef.current.clientWidth -
        translate;
      setIsRightVisible(remainingSpace > 0);
    }
    if (translate > 0) {
      setIsLeftVisible(true);
    }
    if (translate == 0) {
      setIsLeftVisible(false);
    }
  }, [translate]);
  const Translate_Amount = 200;

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTranslationLeft = () => {
    setTranslate((translate) => {
      const newTranslate = translate - Translate_Amount;
      if (newTranslate <= 0) return 0;
      return newTranslate;
    });
  };

  const handleTranslationRight = () => {
    setTranslate((translate) => {
      if (containerRef.current == null) return translate;
      const newTranslate = translate + Translate_Amount;
      const edge = containerRef.current.scrollWidth;
      const width = containerRef.current.clientWidth;
      if (newTranslate + width >= edge) {
        return edge - width;
      }
      return newTranslate;
    });
  };

  return (
    <div
      className={
        sidebarWidth >= 175 ? "selection__bar collapsed" : "selection__bar "
      }
      ref={containerRef}
    >
      <div
        className="selection__bar__content"
        style={{ transform: `translateX(-${translate}px)` }}
        ref={contentRef}
      >
        <button
          className="nav__container"
          onClick={updateSidebarWidth}
          id="explore__icon"
        >
          <ExploreIcon style={{ color: "white" }} />
        </button>
        {selectedSorters.map((arrSort, index) => (
          <button
            onClick={() => handleSorterClick(index)}
            key={arrSort.id}
            className="nav__container"
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
      {!isSmallScreen && (
        <>
          {isLeftVisible && (
            <div
              className="left__selection__index"
              onClick={() => handleTranslationLeft()}
            >
              <ChevronLeftIcon className="icon" />
            </div>
          )}
          {isRightVisible && (
            <div
              className="right__selection__index"
              onClick={() => handleTranslationRight()}
            >
              <ChevronRightIcon className="icon" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Selectionbar;
