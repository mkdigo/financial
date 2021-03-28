import styled from 'styled-components';

export const Container = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px var(--color-gray);
  overflow: hidden;
  transition: 0.3s;
  list-style: none;

  h2 {
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;

    label {
      display: block;
      font-weight: bold;
    }

    select,
    textarea {
      width: 100%;
      max-width: 500px;
    }

    textarea {
      height: 80px;
    }
  }
`;
