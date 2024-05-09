import "./styles.scss";
import { videoActions } from "../../../DummyData/videoactions";

export const VideoScreen: React.FC = () => {
  return (
    <div className="video__page__container">
      <div className="video__screening"></div>
      <div className="video__description">
        <div className="description__title"></div>
        <div className="creator__channel__actions">
          <div className="channel__info">
            <div className="profile__pic"></div>
            <div className="channel__name"></div>
            <div className="subcount"></div>
          </div>
          <button className="sub__button"></button>
        </div>
        <div className="video__actions">
          {videoActions.map((action, index) => (
            <button className="video__action" key={index}>
              {action.content && <action.content />}
            </button>
          ))}
        </div>
        <div className="comment__section">
          <div className="comment__indicator">
            <p>Comments</p>
            <p>Amount</p>
          </div>
          <div className="top__comment">
            <div className="profile__pic"></div>
            <div className="comment__text">
              <p>comment text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
