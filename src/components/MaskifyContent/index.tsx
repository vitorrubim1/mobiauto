import React, { useState } from 'react';
import {
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';

import { Container } from './styles';

export function MaskifyContent() {
  const [texts, setTexts] = useState<string[]>([]);
  const [value, setValue] = useState('');

  function maskify(text: string): string {
    if (text.length <= 4) return text;

    const lastFourChars = text.slice(-4);
    const maskedChars = text.slice(0, -4).replace(/./g, '#');
    const finalText = maskedChars + lastFourChars;

    return finalText;
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleButtonClick = () => {
    const maskedText = maskify(value);

    if (maskedText.length < 1) return;

    setValue('');
    setTexts(previousState => [...previousState, maskedText]);
  };

  return (
    <Container>
      <Typography>
        A tarefa é escrever uma função chamada maskify que substitui todos os
        caracteres, exceto os últimos quatro, por # em uma string.
      </Typography>

      <TextField
        variant="filled"
        label="Digite qualquer coisa"
        placeholder="ex: Hello world!"
        value={value}
        onChange={handleInputChange}
      />

      <List>
        {texts.map(text => (
          <ListItem key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      <Button variant="contained" color="secondary" onClick={handleButtonClick}>
        Validar
      </Button>
    </Container>
  );
}
