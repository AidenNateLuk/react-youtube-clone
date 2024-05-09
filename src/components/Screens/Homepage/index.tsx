import React, { useCallback, useEffect, useMemo, useState } from "react";
import { DesktopLayoutOne } from "./LayOuts/Desktop";
import MobileLayout from "./LayOuts/mobile";
import "./styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/store";
import { changeLayout } from "../../../store/app/LayoutManagement/layoutslice";
import { dummyVideos } from "../../../DummyData/dummyvideos";
import { dummyArraySorters } from "../../../DummyData/dummySorters";

interface HomepageProps {
  updateSidebarWidth: () => void;
}

export const HomePage: React.FC<HomepageProps> = ({ updateSidebarWidth }) => {
  const layoutHandler = useSelector((state: RootState) => state.layout);
  const dispatch = useDispatch();
  const [selectedSorters, setSelectedSorters] = useState(dummyArraySorters);

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

  const filteredVideos = useMemo(() => {
    return dummyVideos.filter((video) =>
      selectedSorters.some(
        (sorter) => sorter.selected && video.tags.includes(sorter.subject)
      )
    );
  }, [selectedSorters]);

  useEffect(() => {
    console.log("Filtered videos:", filteredVideos);
  }, [filteredVideos]);

  const handleSorterClick = (index: number) => {
    const updatedSorters = selectedSorters.map((sorter, i) => ({
      ...sorter,
      selected: i === index,
    }));
    setSelectedSorters(updatedSorters);
  };

  return (
    <>
      {isSmallScreen ? (
        <MobileLayout
          selectedSorters={selectedSorters}
          handleSorterClick={handleSorterClick}
          updateSidebarWidth={updateSidebarWidth}
          filteredVideos={filteredVideos}
          isSmallScreen={isSmallScreen}
        />
      ) : (
        <DesktopLayoutOne
          selectedSorters={selectedSorters}
          handleSorterClick={handleSorterClick}
          updateSidebarWidth={updateSidebarWidth}
          filteredVideos={filteredVideos}
          isSmallScreen={isSmallScreen}
        />
      )}
    </>
  );
};
