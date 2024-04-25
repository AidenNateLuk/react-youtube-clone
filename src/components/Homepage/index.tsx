import Video from "../video";
import Selectionbar from "../navigation/Selectionbar";
interface HomepageProps {
  updateSidebarWidth: () => void;
}
import "./styles.scss";

export const HomePage: React.FC<HomepageProps> = ({ updateSidebarWidth }) => {
  // Array of dummy video data
  const dummyVideos = [
    { id: 1, title: "Dummy Video 1", url: "dummy_video_1.mp4" },
    { id: 2, title: "Dummy Video 2", url: "dummy_video_2.mp4" },
    { id: 3, title: "Dummy Video 3", url: "dummy_video_3.mp4" },
  ];

  return (
    <div className="homepage__container">
      <Selectionbar updateSidebarWidth={updateSidebarWidth} />
      {dummyVideos.map((video) => (
        <Video key={video.id} title={video.title} url={video.url} />
      ))}
    </div>
  );
};
