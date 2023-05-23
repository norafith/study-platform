import styled from "styled-components";

interface SpinnerProps {
  $sizeInPx?: number;
}

const Spinner = styled.div<SpinnerProps>`
  width: ${(props) => props.$sizeInPx ?? 100}px;
  height: ${(props) => props.$sizeInPx ?? 100}px;
  border-radius: 100%;
  background-color: #226fc8;
  animation-name: pulsate;
  animation-iteration-count: infinite;
  animation-duration: 1s;
  animation-timing-function: ease;
  @keyframes pulsate {
    50% {
      opacity: 0.5;
      background-color: #84c5ff;
      opacity: 0.7;
      transform: scale(1.4);
    }
  }
`;

export default Spinner;
