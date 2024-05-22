import React, { useState, useEffect, useRef } from "react";
import Selectionbar from "../../../../navigation/Selectionbar";
import Video from "../../../../video";

interface MobileProps {
  selectedSorters: { id: number; subject: string; selected: boolean }[];
  handleSorterClick: (index: number) => void;
  filteredVideos: {
    id: number;
    title: string;
    channelName: string;
    views: string;
    url: string;
    tags: string[];
    duration: string;
    description: string;
  }[];
  isSmallScreen: boolean;
}

const MobileLayout: React.FC<MobileProps> = ({
  selectedSorters,
  handleSorterClick,
  isSmallScreen,
  filteredVideos,
}) => {
  const [numVideosRendered, setNumVideosRendered] = useState(3);

  const videosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        videosRef.current &&
        window.innerHeight + window.scrollY >=
          videosRef.current.offsetTop + videosRef.current.offsetHeight
      ) {
        setNumVideosRendered((prevNum) =>
          Math.min(prevNum + 3, filteredVideos.length)
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [filteredVideos]);

  return (
    <div className="homepage__container">
      <Selectionbar
        selectedSorters={selectedSorters}
        handleSorterClick={handleSorterClick}
      />
      <div className="video__container" ref={videosRef}>
        {filteredVideos.slice(0, numVideosRendered).map((video) => (
          <Video
            id={video.id}
            description={video.description}
            duration={video.duration}
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

export default MobileLayout;
