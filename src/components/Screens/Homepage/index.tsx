import React, { useEffect, useMemo, useState } from "react";
import { DesktopLayoutOne } from "./LayOuts/Desktop";
import MobileLayout from "./LayOuts/mobile";
import "./styles.scss";

interface HomepageProps {
  updateSidebarWidth: () => void;
}

interface VideoItem {
  id: number;
  title: string;
  channelName: string;
  views: string;
  url: string;
  tags: string[];
}

interface SorterItem {
  id: number;
  subject: string;
  selected: boolean;
}

export const HomePage: React.FC<HomepageProps> = ({ updateSidebarWidth }) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setIsSmallScreen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [selectedSorters, setSelectedSorters] = useState<SorterItem[]>([
    { id: 1, subject: "All", selected: true },
    { id: 2, subject: "Gaming", selected: false },
    { id: 3, subject: "React", selected: false },
    { id: 4, subject: "History", selected: false },
  ]);

  const { dummyVideos } = useMemo(() => {
    const dummyVideos: VideoItem[] = [
      {
        id: 1,
        title: "Minecraft Ep. 1",
        channelName: "PewDiePie",
        views: "1mil",
        url: "dummy_video_1.mp4",
        tags: ["Gaming", "All"],
      },
      {
        id: 2,
        title: "Building React YT clone",
        channelName: "Michael Parker",
        views: "200k",
        url: "dummy_video_2.mp4",
        tags: ["React", "All"],
      },
      {
        id: 3,
        title: "The Rise of the Roman Empire",
        channelName: "HistoryOfTheWorld",
        views: "800k",
        url: "dummy_video_3.mp4",
        tags: ["History", "All"],
      },
      {
        id: 4,
        title: "Minecraft Ep. 2",
        channelName: "PewDiePie",
        views: "800k",
        url: "dummy_video_3.mp4",
        tags: ["Gaming", "All"],
      },
      {
        id: 5,
        title: "Minecraft SkyFactory",
        channelName: "Ssundee",
        views: "1mil",
        url: "dummy_video_3.mp4",
        tags: ["Gaming", "All"],
      },
    ];

    const dummyArraySorters: SorterItem[] = [
      { id: 1, subject: "All", selected: true },
      { id: 2, subject: "Gaming", selected: false },
      { id: 3, subject: "React", selected: false },
      { id: 4, subject: "History", selected: false },
    ];

    return { dummyVideos, dummyArraySorters };
  }, []);

  const filteredVideos = useMemo(() => {
    return dummyVideos.filter((video) =>
      selectedSorters.some(
        (sorter) => sorter.selected && video.tags.includes(sorter.subject)
      )
    );
  }, [dummyVideos, selectedSorters]);

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
