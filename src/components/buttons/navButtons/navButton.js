import "./navButton.scss";

function NavButton(props) {
    return (
        <button className="navButton font_regular">{props.title}</button>
    )
}

export default NavButton;