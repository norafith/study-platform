import { styled } from "styled-components";
import Grid from "./general/Grid";
import Navbar from "./Navbar/Navbar";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { useState } from "react";
import MobileNavbar from "./Navbar/MobileNavbar";

const StyledColumn = styled.section`
  width: 100%;
  padding: 25px 0;
  box-sizing: border-box;
`;

const SmallColumn = styled(StyledColumn)`
  background-color: #2b2b2b;
`;

const SmallColumnMobile = styled(StyledColumn)`
  background-color: #2b2b2b;
  display: flex;
  align-items: center;
  padding: 5px 25px;
`;

// change to main?
const ContentColumn = styled(StyledColumn)`
  background-color: #080808;
  padding: 25px;
`;

interface LayoutProps {
  windowWidth: number;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const navItems = useSelector((state: RootState) => state.navigation.sections);
  const [navbarIsShown, setNavbarIsShown] = useState(false);
  return props.windowWidth > 850 ? (
    <Grid $columnTemplate="300px 1fr" $rowTemplate="100vh">
      <SmallColumn>
        <Navbar items={navItems} />
      </SmallColumn>
      <ContentColumn>{props.children}</ContentColumn>
    </Grid>
  ) : (
    <>
      <Grid $columnAmount={1} $rowTemplate="50px calc(100vh - 50px)">
        <SmallColumnMobile>
          <div onClick={() => setNavbarIsShown(true)}>Menu</div>
        </SmallColumnMobile>
        <ContentColumn>{props.children}</ContentColumn>
      </Grid>
      <MobileNavbar
        items={navItems}
        shown={navbarIsShown}
        changeShown={setNavbarIsShown}
      />
    </>
  );
};

export default Layout;
