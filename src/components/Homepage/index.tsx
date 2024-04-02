import ExploreIcon from "@mui/icons-material/Explore";
import "./styles.scss";
interface HomePageProps {
  updateSidebarWidth: () => void;
  sidebarWidth: number;
}

export const HomePage: React.FC<HomePageProps> = ({
  updateSidebarWidth,
  sidebarWidth,
}) => {
  return (
    <div className="homepage__container">
      <div
        className={
          sidebarWidth > 100 ? "top-bar-bottom active" : "top-bar-bottom "
        }
      >
        <ExploreIcon
          className="explore__icon"
          onClick={() => updateSidebarWidth()}
        />
      </div>
    </div>
  );
};
