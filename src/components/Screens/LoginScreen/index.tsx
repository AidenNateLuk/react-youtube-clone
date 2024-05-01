import YoutubeLoginLogo from "../../../assets/Youtube__login__logo.png";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
export const LoginScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleGuest = () => {
    navigate("/Home");
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={YoutubeLoginLogo} alt="" />
        <button className="login__button">
          Login With <span>Google</span>
        </button>
        <button className="continue__as__guest" onClick={() => handleGuest()}>
          Continue as a <span>Guest</span>
        </button>
        <p className="api__attribution">
          This Project is made using Youtube DATA API
        </p>
      </div>
    </div>
  );
};
