// import { styled } from "styled-components";

import { styled } from "styled-components";
import Grid from "./components/general/Grid";

const StyledDiv = styled.div`
  width: 100%;
`;
const DivRed = styled(StyledDiv)`
  background-color: #2b2b2b;
`;

const DivGreen = styled(StyledDiv)`
  background-color: #080808;
  color: white;
`;

const App: React.FC = () => {
  return (
    <Grid $columnTemplate="300px 1fr" $rowTemplate="100vh">
      <DivRed />
      <DivGreen>Hello world!</DivGreen>
    </Grid>
  );
};

export default App;
