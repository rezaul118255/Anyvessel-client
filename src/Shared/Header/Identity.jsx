import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Identity({ style = null }) {
  return (
    <>
      <Link
        className={`inline-block max-w-64 w-full ${style ? style : ""}`}
        to="/"
      >
        <figure className="w-full h-full">
          <img className="w-full h-full" src={logo} alt="" />
        </figure>
      </Link>
    </>
  );
}
