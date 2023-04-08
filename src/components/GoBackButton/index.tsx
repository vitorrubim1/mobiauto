import React from 'react';
import { useRouter } from 'next/router';
import { IconButton } from '@mui/material';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';

import { Container } from './styles';

interface GoBackButtonProps {
  to: string;
}

const GoBackButton: React.FC<GoBackButtonProps> = ({ to }) => {
  const router = useRouter();

  return (
    <Container>
      <IconButton
        aria-label={`Voltar para página ${to}`}
        onClick={() => router.push(to)}
      >
        <KeyboardReturnOutlinedIcon />
      </IconButton>
    </Container>
  );
};

export { GoBackButton };
