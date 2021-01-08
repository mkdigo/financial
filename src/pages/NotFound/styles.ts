import styled, { keyframes } from 'styled-components';

const ballAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const threadAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const heartAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3) translate(-30px, -50px);
  }
  100% {
    transform: scale(1);
  }
`;

const boardAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const Container = styled.main`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 1rem;
  }

  a {
    margin-bottom: 0.5rem;
    text-decoration: underline;
  }

  svg {
    width: 95%;
    max-width: 500px;
  }

  #ball {
    animation: ${ballAnimation} 2s linear infinite;
  }

  #thread {
    animation: ${threadAnimation} 2s linear infinite;
  }

  #heart {
    animation: ${heartAnimation} 2s linear infinite;
  }

  #board {
    animation: ${boardAnimation} 2s linear infinite;
  }
`;
