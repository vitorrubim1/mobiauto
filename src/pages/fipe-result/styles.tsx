import styled from 'styled-components';
import { Chip as MUIChip } from '@mui/material';
import { theme } from '@styles/theme';

const { palette } = theme;

const Container = styled.main`
  width: 100%;
  height: 100vh;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-color: ${palette.success.light};
`;

const GoBackWrapper = styled.div`
  width: 15rem;
`;

const Chip = styled(MUIChip)`
  padding: 1.5rem 0.5rem;
  font-size: 1.5rem;
  border-radius: 9rem;
  font-weight: bold;
  margin: 1rem 0;
`;

export default function FipeResultStyles() {
  return null;
}

export { Container, GoBackWrapper, Chip };
