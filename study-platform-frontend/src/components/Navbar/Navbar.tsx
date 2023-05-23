import NavItem, { NavItemType } from "./NavItem";

interface NavbarProps {
  items: Array<NavItemType>;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const navItems = props.items.map((item) => <NavItem {...item} />);
  return <nav>{navItems}</nav>;
};

export default Navbar;
