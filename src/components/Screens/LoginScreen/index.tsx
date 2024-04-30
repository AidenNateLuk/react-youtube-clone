import YoutubeLoginLogo from "../../../assets/Youtube__login__logo.png";
import "./styles.scss";

export const LoginScreen: React.FC = () => {
  return (
    <div className="login">
      <div className="login__container">
        <img src={YoutubeLoginLogo} alt="" />
        <button className="login__button">
          Login With <span>Google</span>
        </button>
        <p className="api__attribution">
          This Project is made using Youtube DATA API
        </p>
      </div>
    </div>
  );
};
