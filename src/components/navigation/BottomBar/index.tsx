import SlideshowIcon from "@mui/icons-material/Slideshow";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import "./styles.scss";

export const BottomBar = () => {
  return (
    <div className="bottom__bar__container">
      <div className="bottom__bar__content">
        <div className="bottom__bar__path">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="bottom__bar__path">
          <SlideshowIcon />
          <p>Shorts</p>
        </div>
        <div className="bottom__bar__path">
          <SubscriptionsIcon />
          <p>Subscriptions</p>
        </div>
        <div className="bottom__bar__path">
          <VideoLibraryIcon />
          <p>Library</p>
        </div>
      </div>
    </div>
  );
};
