import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const slideAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  overflow: hidden;
`;

const CardRow = styled.div`
  position: absolute;
  display: flex;
  gap: 2rem;
  padding: 20px;
  will-change: transform;
  
  top: 25%;
  left: 50%;
  transform: translateY(-50%);
  width: max-content;
  animation: ${slideAnimation} 200s linear infinite;
`;

const Card = styled.div`
  width: 130px;
  height: 180px;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.normal};
  background-image: url(${props => props.$cardImage});
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    z-index: 1;
  }
`;

// 카드 데이터 생성 함수
const generateCards = () => {
  const suits = ['spade', 'heart', 'diamond', 'club'];
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
  const cards = [];

  suits.forEach(suit => {
    ranks.forEach(rank => {
      cards.push({ 
        suit, 
        rank, 
        version: Math.random() > 0.5 ? '1' : '2' 
      });
    });
  });

//   // O 카드 추가
//   for (let i = 1; i <= 4; i++) {
//     cards.push({ suit: 'o', version: i.toString() });
//   }

  return cards;
};

const CardBackground = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const allCards = generateCards();
    const shuffledCards = [...allCards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards.slice(0, 20));  // 카드 수 조정
  }, []);

  const getCardImage = (card) => {
    try {
      const fileName = card.rank 
        ? `${card.suit}_${card.rank}_${card.version}` 
        : `${card.suit}_${card.version}`;
      return require(`../../assets/cards/${fileName}.svg`);
    } catch (error) {
      console.error(`Card not found:`, card);
      return null;
    }
  };

  return (
    <BackgroundContainer>
      <CardRow>
        {[...cards, ...cards, ...cards, ...cards].map((card, index) => (  // 4번 반복하여 더 부드러운 전환
          <Card 
            key={`card-${index}`}
            $cardImage={getCardImage(card)}
          />
        ))}
      </CardRow>
    </BackgroundContainer>
  );
};

export default CardBackground; 