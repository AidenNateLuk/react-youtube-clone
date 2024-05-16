import Video from "../../../../video";
import Selectionbar from "../../../../navigation/Selectionbar";

interface DesktopProps {
  //selector Portion

  selectedSorters: { id: number; subject: string; selected: boolean }[];
  handleSorterClick: (index: number) => void;

  //filtered videos Array

  filteredVideos: {
    id: number;
    title: string;
    channelName: string;
    views: string;
    url: string;
    tags: string[];
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
  return (
    <div className="homepage__container">
      <Selectionbar
        selectedSorters={selectedSorters}
        handleSorterClick={handleSorterClick}
      />
      <div className="feed">
        {filteredVideos.slice(0, 5).map((video) => (
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
  );
};
