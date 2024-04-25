import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./styles.scss";
import Thumbnail from "../../assets/images.jpeg";

interface VideoProps {
  title: string;
  url: string;
}

const Video: React.FC<VideoProps> = ({ title }) => {
  return (
    <div className="vid__container">
      <div className="video">
        <img className="thumbnail" src={Thumbnail} alt="Thumbnail" />
      </div>
      <div className="video__description">
        <div className="profile__picture"></div>
        <div className="video__description__text">
          <h2>{title}</h2>
          <p>Markiplier · 128K views · 5 months ago</p>
        </div>
        <MoreVertIcon style={{ color: "white" }} />
      </div>
    </div>
  );
};

export default Video;
