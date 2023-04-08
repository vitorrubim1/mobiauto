import React, { useState } from 'react';
import { AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  CheckFirstLetterContent,
  GoBackButton,
  MaskifyContent,
  UpdateObjectContent,
} from '@components/index';

import { AccordionContainer, Wrapper } from './styles';

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
    content: (
      <Typography>
        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
        laoreet.
      </Typography>
    ),
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

      {accordionItens.map(item => (
        <AccordionContainer
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
        </AccordionContainer>
      ))}
    </Wrapper>
  );
}
