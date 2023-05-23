import { styled } from "styled-components";
import Grid from "./general/Grid";

const StyledColumn = styled.section`
  width: 100%;
  padding: 25px;
  box-sizing: border-box;
`;

const SmallColumn = styled(StyledColumn)`
  background-color: #2b2b2b;
`;

// change to main?
const ContentColumn = styled(StyledColumn)`
  background-color: #080808;
`;

interface LayoutProps {
  windowWidth: number;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return props.windowWidth > 800 ? (
    <Grid
      $columnTemplate="minmax(200px, 400px) minmax(600px, 1fr)"
      $rowTemplate="100vh"
    >
      <SmallColumn />
      <ContentColumn>{props.children}</ContentColumn>
    </Grid>
  ) : (
    <Grid $columnAmount={1} $rowTemplate="100vh">
      <ContentColumn>{props.children}</ContentColumn>
    </Grid>
  );
};

export default Layout;
