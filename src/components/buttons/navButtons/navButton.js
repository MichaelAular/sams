import "./navButton.scss";
import { Link } from "react-router-dom";

function NavButton(props) {
  return (
    <Link to={props.linkTo}>
      <button className="navButton font_regular">{props.title}</button>
    </Link>
  );
}

export default NavButton;
