import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { IconButton, Typography } from '@mui/material';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import { toast } from 'react-toastify';

import { useFipe } from '@hooks/useFipe';

import { Container, Chip } from './styles';

const Result: React.FC = () => {
  const router = useRouter();
  const { selectedCarSpecifications } = useFipe();

  useEffect(() => {
    if (!selectedCarSpecifications) {
      router.push('/');

      toast.error('Selecione o modelo para prosseguir.');
    }
  }, [router, selectedCarSpecifications]);

  return (
    <Container>
      <Head>
        <title>{selectedCarSpecifications?.Modelo}</title>
        <meta
          name="description"
          content={`Confira o resultado para o carro selecionado! Marca: ${selectedCarSpecifications?.Marca}, Modelo: ${selectedCarSpecifications?.Modelo}, Ano Modelo: ${selectedCarSpecifications?.AnoModelo}.`}
        />
      </Head>

      <header>
        <IconButton aria-label="voltar" onClick={() => router.push('/')}>
          <KeyboardReturnOutlinedIcon />
        </IconButton>
      </header>

      <Typography variant="h4">
        Tabela Fipe: Preço {selectedCarSpecifications?.Marca}{' '}
        {selectedCarSpecifications?.Modelo}{' '}
        {selectedCarSpecifications?.AnoModelo}
      </Typography>

      <Chip
        label={selectedCarSpecifications?.Valor}
        variant="filled"
        color="success"
      />

      <Typography variant="body2">
        Este é o preço de compra do veículo
      </Typography>
    </Container>
  );
};

export default Result;
