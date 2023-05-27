import { NavItemType } from "../../store/reducers/navigation";
import { styled } from "styled-components";
import Navbar from "./Navbar";

interface MobileNavbarProps {
  shown: boolean;
  items: Array<NavItemType>;
  changeShown: (shownState: boolean) => void;
  className?: string;
}

const ScreenWrapper = styled.div<{ $shown: boolean }>`
  padding-top: 50px;
  box-sizing: border-box;
  display: ${(props) => (props.$shown ? "block" : "none")};
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background-color: black;
`;

const CloseNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  position: absolute;
  right: 12.5px;
  top: 12.5px;
  cursor: pointer;
  transform: scale(1.1);
`;

const MobileNavbar: React.FC<MobileNavbarProps> = (props) => {
  return (
    <ScreenWrapper $shown={props.shown}>
      <CloseNavbar
        onClick={() => {
          console.log("work");
          props.changeShown(false);
        }}
      >
        <span>X</span>
      </CloseNavbar>
      <Navbar items={props.items} />
    </ScreenWrapper>
  );
};

export default MobileNavbar;
