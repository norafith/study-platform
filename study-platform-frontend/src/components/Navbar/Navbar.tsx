import { NavItemType } from "../../store/reducers/navigation";
import NavItem from "./NavItem";

interface NavbarProps {
  items: Array<NavItemType>;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const navItems = props.items.map((item) => (
    <NavItem {...item} key={item.link} />
  ));
  return <nav className={props.className}>{navItems}</nav>;
};

export default Navbar;
