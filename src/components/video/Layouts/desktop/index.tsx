import ProfilePic from "../../../../assets/unnamed.jpg";
import Thumbnail from "../../../../assets/images.jpeg";
interface VideoProps {
  title: string;
  url: string;
  views: string;
  channelName: string;
  tags: string[];
  isSmallScreen: boolean;
}

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

export default DesktopLayout;
