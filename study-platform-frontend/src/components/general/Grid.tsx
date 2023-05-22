import { styled } from "styled-components";

interface GridProps {
  $columnAmount?: number;
  $rowAmount?: number;
  $columnSize?: string;
  $rowSize?: string;
  $columnTemplate?: string;
  $rowTemplate?: string;
}

const Grid = styled.div<GridProps>`
  display: grid;
  ${(props) => {
    if (props.$columnAmount) {
      return `grid-template-columns: repeat(${
        props.$columnAmount ? props.$columnAmount : 1
      }, ${props.$columnSize ? props.$columnSize : "1fr"})`;
    } else {
      return `grid-template-columns: ${
        props.$columnTemplate ? props.$columnTemplate : "1fr"
      }`;
    }
  }};
  ${(props) => {
    if (props.$rowAmount) {
      return `grid-template-row: repeat(${
        props.$rowAmount ? props.$rowAmount : 1
      }, ${props.$rowSize ? props.$rowSize : "1fr"})`;
    } else {
      return `grid-template-rows: ${
        props.$rowTemplate ? props.$rowTemplate : "1fr"
      }`;
    }
  }}
`;

export default Grid;
