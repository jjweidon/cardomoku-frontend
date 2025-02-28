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
  border-radius: 6px;
  align-items: flex-start;
  justify-items: center;
`;

const CardWrapper = styled.div`
  width: clamp(20px, 4vw, 50px);
  height: clamp(40px, 6vw, 100px);
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-3px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  transition: box-shadow 0.2s;
  
  &.selected {
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.6);
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

  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(prevSelectedCard => prevSelectedCard === cardId ? null : cardId);
  };

  return (
    <CardsContainer>
      {cards.map((card, index) => (
        <CardWrapper key={index} onClick={() => handleCardClick(index)}>
          <CardImage 
            src={getCardImage(card.suit, card.number, card.version)}
            className={selectedCard === index ? 'selected' : ''}
          />
        </CardWrapper>
      ))}
    </CardsContainer>
  );
};

export default PlayerCards;
