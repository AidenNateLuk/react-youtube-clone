import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./styles.scss";
import Thumbnail from "../../assets/images.jpeg";
import ProfilePic from "../../assets/unnamed.jpg";

interface VideoProps {
  title: string;
  url: string;
  views: string;
  channelName: string;
  tags: string[];
  isSmallScreen: boolean;
}

const MobileLayout: React.FC<VideoProps> = ({ title, views, channelName }) => {
  return (
    <div className="vid__container">
      <div className="video">
        <img className="thumbnail" src={Thumbnail} alt="Thumbnail" />
      </div>
      <div className="video__description">
        <div className="profile__picture">
          <img src={ProfilePic} alt="" />
        </div>
        <div className="video__description__text">
          <h2>{title}</h2>
          <p>
            {channelName} · {views} views · 5 months ago
          </p>
        </div>
        <MoreVertIcon style={{ color: "white" }} />
      </div>
    </div>
  );
};

const DesktopLayout: React.FC<VideoProps> = ({ title, views, channelName }) => {
  return (
    <div className="vid__container">
      <div className="video">
        <img className="thumbnail" src={Thumbnail} alt="Thumbnail" />
      </div>
      <div className="video__description">
        <div className="video__description__title">
          <img src={ProfilePic} alt="" />
          <h2>{title}</h2>
        </div>
        <div className="video__description__text">
          <p> {channelName} </p>
          <p>{views} views · 5 months ago</p>
        </div>
      </div>
    </div>
  );
};

const Video: React.FC<VideoProps> = ({
  isSmallScreen,
  title,
  views,
  channelName,
  url,
  tags,
}) => {
  return isSmallScreen ? (
    <MobileLayout
      isSmallScreen={isSmallScreen}
      url={url}
      tags={tags}
      title={title}
      views={views}
      channelName={channelName}
    />
  ) : (
    <DesktopLayout
      isSmallScreen={isSmallScreen}
      url={url}
      tags={tags}
      title={title}
      views={views}
      channelName={channelName}
    />
  );
};

export default Video;
