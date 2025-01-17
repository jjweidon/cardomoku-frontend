import React from 'react';
import styled from 'styled-components';
import { getCardImage } from '../../utils/cardImages';

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: clamp(2px, 0.8vh, 4px);
  padding: clamp(2px, 0.8vw, 4px);
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.shadows.normal};
  aspect-ratio: 4/5;
  margin: auto 0;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background-image: url(${props => props.cardImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateX(-3px);
  }
`;

const PlayerCards = () => {
  const cards = [
    { suit: 'spade', number: 'K', version: 1 },
    { suit: 'heart', number: '7', version: 2 },
    { suit: 'diamond', number: 'A', version: 1 },
    { suit: 'club', number: 'Q', version: 2 },
    { suit: 'spade', number: '10', version: 1 },
    { suit: 'special', number: 'O', version: 1 }
  ];

  return (
    <CardsContainer>
      {cards.map((card, index) => (
        <Card 
          key={index} 
          cardImage={getCardImage(card.suit, card.number, card.version)}
        />
      ))}
    </CardsContainer>
  );
};

export default PlayerCards; 