import styled from 'styled-components';
import { Box } from '@mui/material';

export const Container = styled.main`
  max-width: 32.5rem;
  height: 100vh;

  margin: 0 auto;
  padding: 0.5rem;

  transition: all 200ms;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BoxItem = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 16.25rem;
  height: 15.625rem;

  border: 0.3rem solid #e5e5e5;
  border-radius: 4rem;

  background-color: #fff;

  cursor: pointer;

  transition: all 200ms;

  &:hover {
    transform: translateY(-0.9375rem);

    -webkit-box-shadow: -0.0625rem 0.375rem 0.75rem -0.375rem rgba(0, 0, 0, 0.51);
    -moz-box-shadow: -0.0625rem 0.375rem 0.75rem -0.375rem rgba(0, 0, 0, 0.51);
    box-shadow: -0.0625rem 0.375rem 0.75rem -0.375rem rgba(0, 0, 0, 0.51);
  }
`;
