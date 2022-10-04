import "./navbar.scss"
import NavButton from "../buttons/navButtons/navButton"

function navbar() {
  return (
    <div className="navbarContainer">
      <NavButton title="Over Mij" linkTo="/" />
      <NavButton title="Producten" linkTo="/producten" />
      <NavButton title="Permanente Make-Up" linkTo="/permamakeup" />
      <NavButton title="Huisregels" linkTo="/huisregels" />
      <NavButton title="Contact" linkTo="/contact" />
    </div>
  )
}

export default navbar
