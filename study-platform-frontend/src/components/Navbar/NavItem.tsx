import { Link } from "react-router-dom";

export interface NavItemType {
  sectionName: string;
  link: string;
}

const NavItem: React.FC<NavItemType> = (props) => {
  return <Link to={props.link}>{props.sectionName}</Link>;
};

export default NavItem;
