import React, { useEffect, useMemo, useState } from "react";
import Video from "../../video";
import Selectionbar from "../../navigation/Selectionbar";
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
      setIsSmallScreen(window.innerWidth <= 768);
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

  const MobileLayout: React.FC = () => {
    return (
      <div className="homepage__container">
        <Selectionbar
          selectedSorters={selectedSorters}
          handleSorterClick={handleSorterClick}
          updateSidebarWidth={updateSidebarWidth}
        />
        <div className="video__container">
          {filteredVideos.map((video) => (
            <Video
              isSmallScreen={isSmallScreen}
              key={video.id}
              title={video.title}
              url={video.url}
              views={video.views}
              channelName={video.channelName}
              tags={video.tags}
            />
          ))}
        </div>
      </div>
    );
  };

  const DesktopLayout = () => {
    return (
      <div className="homepage__container">
        <Selectionbar
          selectedSorters={selectedSorters}
          handleSorterClick={handleSorterClick}
          updateSidebarWidth={updateSidebarWidth}
        />
        <div className="feed">
          <div className="video__row first">
            {filteredVideos.slice(0, 3).map((video) => (
              <Video
                key={video.id}
                title={video.title}
                url={video.url}
                views={video.views}
                channelName={video.channelName}
                tags={video.tags}
                isSmallScreen={isSmallScreen}
              />
            ))}
          </div>
          <div className="video__row">
            {filteredVideos.slice(0, 4).map((video) => (
              <Video
                key={video.id}
                title={video.title}
                url={video.url}
                views={video.views}
                channelName={video.channelName}
                tags={video.tags}
                isSmallScreen={isSmallScreen}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return <>{isSmallScreen ? <MobileLayout /> : <DesktopLayout />}</>;
};
