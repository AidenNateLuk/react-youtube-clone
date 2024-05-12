import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import Person2TwoToneIcon from "@mui/icons-material/Person2TwoTone";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FeedIcon from "@mui/icons-material/Feed";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";
import "./styles.scss";

interface SideBarProps {
  sidebarWidth: number;
}
const DesktopLayout: React.FC<SideBarProps> = ({ sidebarWidth }) => {
  return (
    <>
      {sidebarWidth < 175 ? (
        <div className="sidebar closed">
          <div className="sidebar__content">
            <div className="sidebar__path">
              <a href="">
                <HomeOutlinedIcon className="sidebar__icon" />
                Home
              </a>
            </div>
            <div className="sidebar__path">
              <a href="">
                <SubscriptionsOutlinedIcon className="sidebar__icon" />
                Subscriptions
              </a>
            </div>
            <div className="sidebar__path">
              <a href="">
                <Person2TwoToneIcon className="sidebar__icon" />
                You
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className={sidebarWidth > 75 ? "sidebar open" : "sidebar closed"}>
          <div className="sidebar__content">
            <div className="section first">
              <div className="sidebar__path">
                <a href="">
                  <HomeOutlinedIcon className="sidebar__icon" />
                  Your Channel
                </a>
              </div>
              <div className="sidebar__path">
                <a href="">
                  <SubscriptionsOutlinedIcon className="sidebar__icon" />
                  History
                </a>
              </div>
            </div>
            <div className="section second">
              <div className="sidebar__path">
                <a href="">
                  <HomeOutlinedIcon className="sidebar__icon" />
                  Playlists
                </a>
              </div>
              <div className="sidebar__path">
                <a href="">
                  <SubscriptionsOutlinedIcon className="sidebar__icon" />
                  Your videos
                </a>
              </div>
              <div className="sidebar__path">
                <a href="">
                  <HomeOutlinedIcon className="sidebar__icon" />
                  Watch Later
                </a>
              </div>
              <div className="sidebar__path">
                <a href="">
                  <SubscriptionsOutlinedIcon className="sidebar__icon" />
                  Liked videos
                </a>
              </div>
            </div>
            <div className="section third"></div>
            <div className="section fourth">
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
                  <PodcastsIcon className="sidebar__icon" />
                  Podcasts
                </a>
              </div>
            </div>
            <div className="section fifth">
              <div className="sidebar__path">
                <YouTubeIcon />
                <p>Youtube Kids</p>
              </div>
              <div className="sidebar__path">
                <YouTubeIcon />
                <p>Youtube Music</p>
              </div>
            </div>
            <div className="section sixth">
              <div className="sidebar__path">
                <SettingsOutlinedIcon />
                <p>Settings</p>
              </div>
              <div className="sidebar__path">
                <HelpOutlineOutlinedIcon />
                <p>Help</p>
              </div>
              <div className="sidebar__path">
                <FeedbackOutlinedIcon />
                <p>Feedback</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DesktopLayout;
