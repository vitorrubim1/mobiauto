import axios from 'axios';

async function getRickAndMortyCharacters() {
  const { data } = await axios.get(
    'https://rickandmortyapi.com/api/character/1,2,3,4,5',
  );

  const parsedData = data.map(item => {
    return {
      nome: item.name,
      genero: item.gender === 'Female' ? 'Mulher' : 'Homem',
      avatar: item.image,
      especie: item.species === 'Human' ? 'Humano' : 'Alienígena',
    };
  });

  return parsedData;
}

module.exports = getRickAndMortyCharacters;
