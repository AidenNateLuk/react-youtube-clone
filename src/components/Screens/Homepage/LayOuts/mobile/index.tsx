import Selectionbar from "../../../../navigation/Selectionbar";
import Video from "../../../../video";

interface MobileProps {
  //selector Portion

  updateSidebarWidth: () => void;
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

const MobileLayout: React.FC<MobileProps> = ({
  updateSidebarWidth,
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

export default MobileLayout;
