import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';
import { toast } from 'react-toastify';

import { useFipe } from '@hooks/useFipe';
import { GoBackButton } from '@components/index';

import { Chip, Container, GoBackWrapper } from './styles';

export default function FipeResult() {
  const router = useRouter();
  const { selectedCarSpecifications } = useFipe();

  useEffect(() => {
    if (!selectedCarSpecifications) {
      router.push('/fipe');

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

      <GoBackWrapper>
        <GoBackButton to="/fipe" />
      </GoBackWrapper>

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
}
