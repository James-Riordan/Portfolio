import styled from "styled-components";

export const NumContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;

  margin: 0 auto;
  display: flex;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
  }
`;

export const Number = styled.h1`
  font-size: 80px;
  color: #18191b;
  text-align: center;
  -webkit-animation: glow 5s ease-in-out infinite, breathing 2s ease-out infinite;
  -moz-animation: glow 5s ease-in-out infinite, breathing 2s ease-out infinite;
  animation: breathing 3s ease-out infinite;

  &:hover {
    cursor: pointer;
    animation: none;
    background: ${(props) =>
      props.colorAlt
        ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
        : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @keyframes breathing {
    0% {
      transform: scale(1.0);
    }

    10% {
      transform: scale(1.1);
      text-shadow: 0 0 20px #f6e27a, 0 0 30px #f6e27a, 0 0 40px #f6e27a,
        0 0 50px #f6e27a, 0 0 60px #f6e27a;
    }

    20% {
      transform: scale(1.0);
      text-shadow: 0 0 20px #f6e27a, 0 0 30px #f6e27a, 0 0 40px #f6e27a, 
    }

    30% {
      transform: scale(1.1);
      text-shadow: 0 0 20px #f6e27a, 0 0 30px #f6e27a, 0 0 40px #f6e27a,
        0 0 50px #f6e27a, 0 0 60px #f6e27a;
    }

    40% {
      transform: scale(1.0);
      text-shadow: 0 0 20px #f6e27a, 0 0 30px #f6e27a, 0 0 40px #f6e27a,
        0 0 50px #f6e27a, 0 0 60px #f6e27a;
    }
    50% {
      transform: scale(1.0);
    }
    60% {
      transform: scale(1.0);
    }
    70% {
      transform: scale(1.0);
    }
    80% {
      transform: scale(1.0);
    }
    90% {
      transform: scale(1.0);
    }
    100% {
      transform: scale(1.0);
    }
  }



  @keyframes glow {
    0% {
      text-shadow: none;
      color: #18191b;
    }

    25% {
      text-shadow: 0 0 20px #f6e27a, 0 0 30px #f6e27a, 0 0 40px #f6e27a,
        0 0 50px #f6e27a, 0 0 60px #f6e27a;
      color: #fff;
    }

    50% {
      text-shadow: none
      color: #18191b
    }

    75% {
      text-shadow: 0 0 20px purple, 0 0 30px purple, 0 0 40px purple,
        0 0 50px purple, 0 0 60px purple;
      color: #fff;

    }

    100% {
      text-shadow: none;
      color: #18191b
    }
  }
`;
