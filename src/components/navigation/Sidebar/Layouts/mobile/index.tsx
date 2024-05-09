import LogoDark from "../../../assets/LogoDark.svg";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FeedIcon from "@mui/icons-material/Feed";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PodcastsIcon from "@mui/icons-material/Podcasts";

interface SideBarProps {
  sidebarWidth: number;
}
const MobileLayout: React.FC<SideBarProps> = ({ sidebarWidth }) => {
  return (
    <>
      {sidebarWidth < 175 ? (
        <div className="sidebar closed">
          <div className="sidebar__content">
            <div className="sidebar__path">
              <a href="">
                {" "}
                <WhatshotIcon className="sidebar__icon" />
                Trending
              </a>
            </div>
            <div className="sidebar__path">
              <a href="">
                <MusicNoteIcon className="sidebar__icon" />
                Music
              </a>
            </div>
            <div className="sidebar__path">
              <a href="">
                <SportsEsportsIcon className="sidebar__icon" />
                Gaming
              </a>
            </div>
            <div className="sidebar__path">
              <a href="">
                <FeedIcon className="sidebar__icon" />
                News
              </a>
            </div>
            <div className="sidebar__path">
              <a href="">
                {" "}
                <EmojiEventsIcon className="sidebar__icon" />
                Sports
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className={sidebarWidth > 75 ? "sidebar open" : "sidebar closed"}>
          <div className="sidebar__content">
            <img className="logo" src={LogoDark} alt="Logo" />
            <div className="sidebar__path">
              <a href="">
                {" "}
                <WhatshotIcon className="sidebar__icon" />
                Trending
              </a>
            </div>
            <div className="sidebar__path">
              <a href="">
                <MusicNoteIcon className="sidebar__icon" />
                Music
              </a>
            </div>
            <div className="sidebar__path">
              <a href="">
                <SportsEsportsIcon className="sidebar__icon" />
                Gaming
              </a>
            </div>
            <div className="sidebar__path">
              <a href="">
                <FeedIcon className="sidebar__icon" />
                News
              </a>
            </div>
            <div className="sidebar__path">
              <a href="">
                {" "}
                <EmojiEventsIcon className="sidebar__icon" />
                Sports
              </a>
            </div>
            <div className="sidebar__path">
              <a href="">
                {" "}
                <PodcastsIcon className="sidebar__icon" />
                Podcasts
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileLayout;
