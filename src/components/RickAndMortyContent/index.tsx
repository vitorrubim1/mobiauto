import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { toast } from 'react-toastify';

import { RickAndMortyParsed, RickAndMortyResponse } from '@dtos/RickAndMorty';

const RickAndMortyContent: React.FC = () => {
  const [characters, setCharacters] = useState<RickAndMortyParsed[]>([]);

  useEffect(() => {
    const getRickAndMortyCharacters = async () => {
      try {
        const { data } = await axios.get<RickAndMortyResponse[]>(
          'https://rickandmortyapi.com/api/character/1,2,3,4,5',
        );

        const parsedData: RickAndMortyParsed[] = data.map(item => {
          return {
            nome: item.name,
            genero: item.gender === 'Female' ? 'Mulher' : 'Homem',
            avatar: item.image,
            especie: item.species === 'Human' ? 'Humano' : 'Alienígena',
          };
        });

        setCharacters(parsedData);
      } catch {
        toast.error(
          'Não foi possível realizar a requisição para Rick And Morty API',
        );
      }
    };

    getRickAndMortyCharacters();
  }, []);

  return (
    <>
      <Typography>
        A tarefa realizar uma chamada para a api rick and morty e resgatar
        informações dos seguintes personagens: Rick Sanchez, Morty Smith, Summer
        Smith, Beth Smith, Jerry Smith. Ajustando nome dos atributos para
        português.
      </Typography>

      <List>
        {characters.map(character => (
          <ListItem key={character.nome}>
            <ListItemAvatar>
              <Avatar src={character.avatar} />
            </ListItemAvatar>

            <ListItemText
              primary={character.nome}
              secondary={`${character.genero} - ${character.especie}`}
            />
          </ListItem>
        ))}
      </List>

      <Typography variant="h5" sx={{ m: '1rem 0' }}>
        Resultado da requisição modificada:
      </Typography>

      <pre>{JSON.stringify(characters, null, 2)}</pre>
    </>
  );
};

export { RickAndMortyContent };
