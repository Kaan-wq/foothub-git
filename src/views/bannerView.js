import "../styles/Banner.css";
import logo from "../assets/logo.png";
import name_app from "../assets/name.png"
import {useNavigate} from "react-router-dom";

function BannerView({ name }) {

    const navigate = useNavigate();

  return (
    <div className="fh-banner">
      <h1 className="fh-title">
          <img className="fh-app" src={name_app} alt="Logo" onClick={() => liveACB()}/>
      </h1>
      <img className="fh-logo" src={logo} alt="Logo" onClick={() => liveACB()}/>
    </div>
  );

  function liveACB(){
      navigate("/");
  }
}

export default BannerView;
