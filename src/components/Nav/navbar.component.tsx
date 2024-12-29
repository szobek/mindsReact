import {NavLink } from "react-router";
import { Navitem } from "../../models/Nav";
const Navbar = () => {
  const menuItems: Navitem[] = [
    { id: 1, name: 'Billing', url: '/billing',icon:"./assets/icons/calculator.svg" },
    { id: 2, name: 'Statistics', url: '/statistics',icon:"./assets/icons/cash-stack.svg" }
  ];
  const listItems = menuItems.map((item) =><>
    
  <NavLink
    to={item.url}
    className={({ isActive, isPending }) =>
      isPending ? "pending" : isActive ? "active" : ""
    }
  >
    <img src={item.icon} alt="" /> { item.name}
  </NavLink>
  </>
  );
  return (
    <>{listItems}</>
  )
}

export default Navbar