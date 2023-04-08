import styled from 'styled-components';
import { Check, Close } from '@mui/icons-material';

import { theme } from '@styles/theme';

const { palette } = theme;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const StyledCheck = styled(Check)`
  color: ${palette.success.main};
  margin: 0 1rem;
`;

export const StyledClose = styled(Close)`
  color: ${palette.error.main};
  margin: 0 1rem;
`;
