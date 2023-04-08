import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  > div,
  button {
    margin-top: 1rem;
    max-width: 18.75rem;
  }
`;
