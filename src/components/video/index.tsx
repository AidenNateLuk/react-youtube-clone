import ProfilePic from "../../assets/unnamed.jpg";
import Thumbnail from "../../assets/images.jpeg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { VideoItem } from "../../DummyData/dummyvideos";

const Video: React.FC<VideoItem & { isSmallScreen: boolean }> = ({
  title,
  views,
  channelName,
  duration,
  id,
  description,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isResultsRoute = location.pathname === "/results";
  const layoutHandler = useSelector((state: RootState) => state.layout);

  const isSmallScreen = layoutHandler.isSmallScreen;
  return (
    <div className="vid__container">
      <div
        className="video"
        onClick={() => {
          navigate(`/Watch/${id}`);
        }}
      >
        <img className="thumbnail" src={Thumbnail} alt="Thumbnail" />
        <p className="duration">{duration}</p>
      </div>
      {!isResultsRoute && !isSmallScreen && (
        <div className="video__description">
          <MoreVertIcon style={{ color: "white" }} />
          <div className="video__description__text">
            <h2>{title}</h2>
            <div className="info__section">
              <p className="channel__name">{channelName}</p>
              <p className="video__info">{views} views · 5 months ago</p>
            </div>
          </div>
          <div className="profile__picture">
            <img src={ProfilePic} alt="" />
          </div>
        </div>
      )}
      {isSmallScreen && (
        <div className="video__description">
          <MoreVertIcon style={{ color: "white" }} />
          <div className="video__description__text">
            <h2>{title}</h2>
            <div className="info__section">
              <p className="channel__name">{channelName}</p>
              <p className="video__info">· {views} views · 5 months ago</p>
            </div>
          </div>
          <div className="profile__picture">
            <img src={ProfilePic} alt="" />
          </div>
        </div>
      )}
      {isResultsRoute && !isSmallScreen && (
        <div className="video__description__results">
          <MoreVertIcon style={{ color: "white" }} />
          <div className="video__description__text">
            <h2>{title}</h2>
            {isSmallScreen ? (
              <p className="video__info">· {views} views · 5 months ago</p>
            ) : (
              <p className="video__info">{views} views · 5 months ago</p>
            )}
            <div className="info__section">
              <div className="profile__picture">
                <img src={ProfilePic} alt="" />
              </div>
              <p className="channel__name">{channelName}</p>
            </div>
            <p className="description">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
