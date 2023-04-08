import styled from 'styled-components';
import { Paper as PaperMUI } from '@mui/material';

export const Container = styled.main`
  max-width: 32.5rem;
  height: 100vh;

  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  > h4 {
    margin-bottom: 0.5rem;
  }
`;

export const Paper = styled(PaperMUI)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: start;

  width: 95%;

  margin-top: 1rem;
  padding: 1.5rem 3.5rem;

  fieldset {
    width: 100%;
    padding-bottom: 1.5rem;
  }

  @media screen and (max-width: 600px) {
    padding: 1rem 1.75rem;
  }
`;
