import Selectionbar from "../../../../navigation/Selectionbar";
import Video from "../../../../video";

interface MobileProps {
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
    duration: string;
  }[];

  //isSmallScreen

  isSmallScreen: boolean;
}

const MobileLayout: React.FC<MobileProps> = ({
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
      <div className="video__container">
        {filteredVideos.map((video) => (
          <Video
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
