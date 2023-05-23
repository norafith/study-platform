import styled from "styled-components";

const Spinner = styled.div`
  width: 100px;
  height: 100px;
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
