import React, { useState } from 'react';
import {
  AccordionDetails,
  AccordionSummary,
  Breadcrumbs,
  Link,
  Typography,
  Accordion,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  CheckFirstLetterContent,
  GoBackButton,
  MaskifyContent,
  RickAndMortyContent,
  UpdateObjectContent,
} from '@components/index';

import { Wrapper, Flex } from './styles';

const accordionItens = [
  {
    id: 'panel1bh-header',
    name: 'Exercício 01',
    description: 'Maskify',
    content: <MaskifyContent />,
  },
  {
    id: 'panel2bh-header',
    name: 'Exercício 02',
    description: 'Atualizar objeto',
    content: <UpdateObjectContent />,
  },
  {
    id: 'panel3bh-header',
    name: 'Exercício 03',
    description: 'Rick and Morty',
    content: <RickAndMortyContent />,
  },
  {
    id: 'panel4bh-header',
    name: 'Exercício 04',
    description: 'Primeira letra',
    content: <CheckFirstLetterContent />,
  },
];

export default function Exercises() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Wrapper>
      <GoBackButton to="/" />

      <Flex>
        <Typography color="text.primary">
          Esta é uma representação visual dos exercícios solicitados. Para
          visualizar apenas os arquivos, acesse:
        </Typography>

        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: '1rem' }}>
          <Typography color="text.primary">src</Typography>
          <Link
            underline="hover"
            color="inherit"
            href="https://github.com/vitorrubim1/mobiauto/tree/main/src/exercises"
            target="_blank"
          >
            exercises
          </Link>
          <Typography color="text.primary">...</Typography>
        </Breadcrumbs>
      </Flex>

      {accordionItens.map(item => (
        <Accordion
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
          key={item.id}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id={item.id}
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {item.name}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>
              {item.description}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>{item.content}</AccordionDetails>
        </Accordion>
      ))}
    </Wrapper>
  );
}
