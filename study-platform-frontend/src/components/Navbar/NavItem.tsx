import { Link } from "react-router-dom";
import { NavItemType } from "../../store/reducers/navigation";
import { styled } from "styled-components";

const NavItem: React.FC<NavItemType & { className?: string }> = (props) => {
  return (
    <Link to={props.link} className={props.className}>
      {props.sectionName}
    </Link>
  );
};

const StyledNavItem = styled(NavItem)`
  display: block;
  width: 100%;
  padding: 10px 25px;
  cursor: pointer;
  transition: 0.3s;
  box-sizing: border-box;
  &:hover {
    background-color: #393939;
  }
`;

export default StyledNavItem;
