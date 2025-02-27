import React from 'react';
import styled from 'styled-components';
import { getCardImage } from '../../utils/cardImages';

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: clamp(2px, 0.8vh, 4px);
  padding: clamp(2px, 0.8vw, 4px);
  width: auto;
  height: auto;
  // background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.shadows.normal};
  margin: auto 0;
  align-items: center;
  justify-items: center;
`;

const Card = styled.div`
  width: clamp(20px, 4vw, 50px);
  height: clamp(40px, 6vw, 100px);
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
    { suit: 'spade', number: 'k', version: 1 },
    { suit: 'heart', number: '7', version: 2 },
    { suit: 'diamond', number: 'a', version: 1 },
    { suit: 'clover', number: 'q', version: 2 },
    { suit: 'spade', number: '10', version: 1 },
    { suit: 'spade', number: 'j', version: 1 }
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