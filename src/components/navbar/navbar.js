import "./navbar.scss"
import NavButton from "../buttons/navButtons/navButton"

function navbar() {
  return (
    <div className="navbarContainer">
      <NavButton title="Over Ons" />
      <NavButton title="Producten" />
      <NavButton title="Permanente Make-Up" />
      <NavButton title="Huisregels" />
      <NavButton title="Contact" />
    </div>
  )
}

export default navbar
