import React from "react";
import { selectQuery } from "../../../store/app/NavigationManagement/querySlice";
import { useSelector } from "react-redux";
import { dummyVideos } from "../../../DummyData/dummyvideos";
import { RootState } from "../../../store/store";
import "../../video/styles.scss";
import Video from "../../video";
import "./styles.scss";

const ResultsScreen: React.FC = () => {
  const query = useSelector(selectQuery);
  const filteredVideos = dummyVideos.filter((video) =>
    video.title.toLowerCase().includes(query.toLowerCase())
  );
  const isSmallScreen = useSelector(
    (state: RootState) => state.layout.isSmallScreen
  );

  return (
    <div className="results__container">
      <div className="feed">
        {filteredVideos.length > 0 ? (
          <div className="video__container">
            {filteredVideos.map((video) => (
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
        ) : (
          <h1>No results found</h1>
        )}
      </div>
    </div>
  );
};

export default ResultsScreen;
