import {NavLink } from "react-router";
import { Navitem } from "../../models/Nav";
import "./navbar.component.scss";
const Navbar = () => {
  const menuItems: Navitem[] = [
    { id: 1, name: 'Billing', url: '/billing',icon:"calculator.svg" },
    { id: 2, name: 'Statistics', url: '/statistics',icon:"cash-stack.svg" }
  ];
  const listItems = menuItems.map((item) =>
    
  <NavLink
    to={item.url}
    className="nav-link-item"
  >
    <img src={`./assets/icons/${item.icon}`} alt="" /> { item.name}
  </NavLink>
  );
  return (
    <div className="nav-container">{listItems}</div>
  )
}

export default Navbar