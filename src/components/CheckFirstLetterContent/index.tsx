import React, { useState, useCallback } from 'react';
import { TextField, Typography } from '@mui/material';

import { Container, StyledCheck, StyledClose } from './styles';

const CheckFirstLetterContent: React.FC = () => {
  const [value, setValue] = useState('');
  const [firstLetterIsUpperCase, setFirstLetterIsUpperCase] = useState(false);

  const checkIfTheFirstLetterIsUppercase = (word: string): boolean => {
    const firstLetter = word[0];
    return /^[A-ZÀ-ÖØ-Þ]/.test(firstLetter);
  };

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      setValue(inputValue);
      setFirstLetterIsUpperCase(checkIfTheFirstLetterIsUppercase(inputValue));
    },
    [],
  );

  return (
    <>
      <Typography>
        A tarefa é verificar se a primeira letra de uma string está em
        maiúsculo, retornando true se estiver em maiúsculo e false caso
        contrário.
      </Typography>

      <Container>
        <TextField
          variant="filled"
          label="Digite qualquer coisa"
          placeholder="ex: Hello world!"
          value={value}
          onChange={handleInputChange}
        />

        {!!value && (
          <>
            {firstLetterIsUpperCase ? (
              <>
                <StyledCheck />
                <Typography>A primeira letra é maiúscula</Typography>
              </>
            ) : (
              <>
                <StyledClose />
                <Typography>A primeira letra é minúscula</Typography>
              </>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export { CheckFirstLetterContent };
