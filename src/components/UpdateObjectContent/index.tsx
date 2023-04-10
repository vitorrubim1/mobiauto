import React, { useState } from 'react';
import { TextField, Button, Grid, Box, Typography } from '@mui/material';
import { toast } from 'react-toastify';

interface ObjectData {
  key: string;
  value: string;
}

export function UpdateObjectContent() {
  const [userData, setUserData] = useState({
    name: 'Marcos',
    country: 'Brasil',
    age: 22,
  });
  const [objectData, setObjectData] = useState<ObjectData[]>([
    { key: '', value: '' },
  ]);

  const handleAddFields = () => {
    if (objectData.length === 4) {
      toast.warning('Limite máximo de propriedades excedido');
      return;
    }

    setObjectData([...objectData, { key: '', value: '' }]);
  };

  const handleChange =
    (index: number, field: keyof ObjectData) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const inputValue = event.target.value;

      setObjectData(prevData => {
        const newData = [...prevData];
        newData[index] = { ...newData[index], [field]: inputValue };
        return newData;
      });
    };

  const updateData = () => {
    const allowedKeys = Object.keys(userData);

    const updatedData: { [key: string]: string | number } = {};

    objectData.forEach(({ key, value }) => {
      if (key === '' || value === '') return;
      if (!allowedKeys.includes(key)) return;

      updatedData[key] = value;
    });

    setUserData(prevUserData => ({ ...prevUserData, ...updatedData }));
  };

  return (
    <>
      <Typography>
        A tarefa é escrever uma função que atualiza um objeto, mas se houver
        propriedades não previstas/mapeada não será refletido no objeto em tela.
      </Typography>

      <Box m={2}>
        {objectData.map((data, index) => (
          <Grid container spacing={1} key={index} marginBottom={2}>
            <Grid item>
              <TextField
                variant="filled"
                label="Chave"
                placeholder="ex: name"
                value={data.key}
                onChange={handleChange(index, 'key')}
              />
            </Grid>

            <Grid item>
              <TextField
                variant="filled"
                label="Valor"
                placeholder="ex: John doe"
                value={data.value}
                onChange={handleChange(index, 'value')}
              />
            </Grid>
            <Grid item display="flex" alignItems="center">
              {index === objectData.length - 1 && (
                <Button fullWidth onClick={handleAddFields}>
                  Adicionar nova propriedade
                </Button>
              )}
            </Grid>
          </Grid>
        ))}

        <Typography variant="h5" sx={{ m: '1rem 0' }}>
          Objeto resultante:
        </Typography>
        <pre>{JSON.stringify(userData, null, 2)}</pre>

        <Box mt={3}>
          <Button variant="contained" color="secondary" onClick={updateData}>
            Salvar dados
          </Button>
        </Box>
      </Box>
    </>
  );
}
