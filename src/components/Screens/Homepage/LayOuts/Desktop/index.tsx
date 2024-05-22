import Video from "../../../../video";
import Selectionbar from "../../../../navigation/Selectionbar";
import { useSelector } from "react-redux";
import { selectSidebarWidth } from "../../../../../store/store";

interface DesktopProps {
  //selector Portion

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

  //isSmallScreen

  isSmallScreen: boolean;
}

export const DesktopLayoutOne: React.FC<DesktopProps> = ({
  selectedSorters,
  handleSorterClick,
  isSmallScreen,
  filteredVideos,
}) => {
  const sidebarWidth = useSelector(selectSidebarWidth);
  return (
    <div
      className={
        sidebarWidth < 175
          ? "homepage__container"
          : "homepage__container collapsed"
      }
    >
      <Selectionbar
        selectedSorters={selectedSorters}
        handleSorterClick={handleSorterClick}
      />
      <div className="feed">
        {filteredVideos.slice(0, 5).map((video) => (
          <Video
            description={video.description}
            id={video.id}
            duration={video.duration}
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
  );
};
