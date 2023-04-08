import styled from 'styled-components';
import { Accordion } from '@mui/material';

export const Wrapper = styled.div`
  max-width: 50rem;
  height: 100vh;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const AccordionContainer = styled(Accordion)`
  /* width: 100%; */
`;
