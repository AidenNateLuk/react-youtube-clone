import ProfilePic from "../../../../assets/unnamed.jpg";
import Thumbnail from "../../../../assets/images.jpeg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
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

export default MobileLayout;
