import { Link } from "react-router";
import { Navitem } from "../../models/Nav";
const Navbar = () => {
  const menuItems: Navitem[] = [
    { id: 1, name: 'Billing', url: '/billing' },
    { id: 2, name: 'Statistics', url: '/statistics' }
  ];
  const listItems = menuItems.map((item) =>
    <Link key={item.id} to={item.url}>{item.name}</Link>
  );
  return (
    <>{listItems}</>
  )
}

export default Navbar