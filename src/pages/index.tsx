import { Button, Typography } from '@mui/material';
import { toast } from 'react-toastify';

export default function Home() {
  return (
    <>
      <Typography variant="h1">Olá</Typography>
      <Button variant="contained" type="submit" color="secondary">
        Entrar na plataforma
      </Button>
    </>
  );
}
