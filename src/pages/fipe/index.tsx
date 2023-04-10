import { Button, Typography, Autocomplete, TextField } from '@mui/material';
import Head from 'next/head';

import { useFipe } from '@hooks/useFipe';

import { GoBackButton } from '@components/index';

import { Paper, Container } from './styles';

export default function Home() {
  const {
    brands,
    brandIsLoading,
    selectedBrand,
    setSelectedBrand,

    carModels,
    modelIsLoading,
    selectedModel,
    setSelectedModel,

    modelsYear,
    modelsYearIsLoading,
    selectedModelsYear,
    setSelectedModelsYear,

    handleGetCarValue,
    carValueLoading,
  } = useFipe();

  const modelIsSelected = !!modelsYear[0];

  return (
    <Container>
      <Head>
        <title>Buscar modelo</title>
        <meta
          name="description"
          content="Encontre o valor do carro! Selecione a Marca, Modelo e Ano do carro desejado. Em apenas alguns cliques, você poderá descobrir o valor estimado do carro que você está interessado"
        />
      </Head>

      <GoBackButton to="/" />

      <Typography variant="h4">Tabela Fipe</Typography>
      <Typography variant="h5">
        Consulte o valor de um veículo de forma gratuita
      </Typography>

      <Paper>
        <fieldset>
          <Autocomplete
            options={brands}
            renderInput={params => <TextField {...params} label="Marca" />}
            size="small"
            loading={brandIsLoading}
            isOptionEqualToValue={(option, value) =>
              option.codigo === value.codigo
            }
            value={selectedBrand}
            onChange={(_, value) => setSelectedBrand(value)}
          />
        </fieldset>

        <fieldset>
          <Autocomplete
            options={carModels}
            renderInput={params => <TextField {...params} label="Modelo" />}
            size="small"
            loading={modelIsLoading}
            value={selectedModel}
            isOptionEqualToValue={(option, value) =>
              option.codigo === value.codigo
            }
            onChange={(_, value) => setSelectedModel(value)}
          />
        </fieldset>

        {modelIsSelected && (
          <fieldset>
            <Autocomplete
              options={modelsYear}
              renderInput={params => <TextField {...params} label="Ano" />}
              size="small"
              loading={modelsYearIsLoading}
              value={selectedModelsYear}
              isOptionEqualToValue={(option, value) =>
                option.codigo === value.codigo
              }
              onChange={(_, value) => setSelectedModelsYear(value)}
            />
          </fieldset>
        )}

        <Button
          variant="contained"
          color="secondary"
          disabled={!selectedModelsYear?.codigo}
          onClick={handleGetCarValue}
        >
          {carValueLoading ? 'Carregando...' : 'Consultar preço'}
        </Button>
      </Paper>
    </Container>
  );
}
