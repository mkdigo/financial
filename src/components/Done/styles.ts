import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  0%, 100% {
    transform: scale(0);
  }

  25%, 75% {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-green);

  z-index: 2;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background: var(--color-green);
    color: var(--color-offwhite);
    border-radius: 1rem;
    animation: ${animate} 0.6s ease-in-out;
    transform: scale(0);
  }
`;
