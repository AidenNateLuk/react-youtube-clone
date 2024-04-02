import ExploreIcon from "@mui/icons-material/Explore";
import "./styles.scss";
interface HomePageProps {
  updateSidebarWidth: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ updateSidebarWidth }) => {
  return (
    <div className="homepage__container">
      <div className="top-bar-bottom">
        <ExploreIcon
          className="explore__icon"
          onClick={() => updateSidebarWidth()}
        />
      </div>
    </div>
  );
};
