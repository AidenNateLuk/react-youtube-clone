import "./styles.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
export const HomePage: React.FC = () => {
  return (
    <div className="homepage__container">
      <div className="vid__container">
        <div className="video"></div>
        <div className="video__description">
          <div className="profile__picture"></div>
          <div className="video__description__text">
            <h2>Punching a crap ton of babies to death</h2>
            <p>it was glorious</p>
          </div>
          <MoreVertIcon style={{ color: "white" }} />
        </div>
      </div>
    </div>
  );
};
