import "../styles/Banner.css";
import logo from "../assets/mbappe.jpg"; // Replace with the path to your logo file

function BannerView({ name }) {
  return (
    <div className="fh-banner">
      <h1 className="fh-title">{name}</h1>
      <img className="fh-logo" src={logo} alt="Logo" />
    </div>
  );
}

export default BannerView;
