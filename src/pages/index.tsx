import { Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { Container, BoxItem } from './fipe/styles';

export default function Home() {
  const router = useRouter();

  return (
    <Container>
      <Head>
        <title>Mobiauto - Vitor Rubim</title>
      </Head>

      <Grid container spacing={3}>
        {['Exercícios', 'Tabela FIPE'].map(item => (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            display="flex"
            alignItems="center"
            justifyContent="center"
            key={item}
          >
            <BoxItem
              onClick={() => {
                if (item === 'Exercícios') {
                  router.push('/exercises');
                  return;
                }

                router.push('/fipe');
              }}
            >
              <Typography variant="h5">{item}</Typography>
            </BoxItem>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
