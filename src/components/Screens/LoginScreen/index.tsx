import YoutubeLoginLogo from "../../../assets/Youtube__login__logo.png";
import "./styles.scss";
interface LoginProps {
  handleLogin: () => void;
}
export const LoginScreen: React.FC<LoginProps> = ({ handleLogin }) => {
  return (
    <div className="login">
      <div className="login__container">
        <img src={YoutubeLoginLogo} alt="" />
        <button onClick={() => handleLogin()} className="login__button">
          Login With <span>Google</span>
        </button>
        <p className="api__attribution">
          This Project is made using Youtube DATA API
        </p>
      </div>
    </div>
  );
};
