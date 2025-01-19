import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const slideAnimation = keyframes`
  0% {
    transform: translate(-50%, 0);
  }
  100% {
    transform: translate(-150%, 0);
  }
`;

const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.1);
`;

const CardRow = styled.div`
  position: absolute;
  display: flex;
  gap: 20px;
  padding: 20px;
  animation: ${slideAnimation} 20s linear infinite;
  animation-delay: ${props => props.$delay}s;
  transform: translate(-50%, 0);
  
  &:first-child {
    top: 10%;
    transform: rotate(-5deg);
  }
  
  &:last-child {
    top: 60%;
    transform: rotate(5deg);
  }
`;

const CardContainer = styled.div`
  width: 120px;
  height: 174px;
  position: relative;
  transform: ${props => props.$isSecondRow ? 'rotate(180deg)' : 'none'};
  opacity: 0.7;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: ${props => props.$isSecondRow ? 
      'rotate(180deg) scale(1.1)' : 'scale(1.1)'};
    opacity: 1;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

// 카드 데이터 배열 생성
const generateCards = () => {
  const suits = ['spade', 'heart', 'diamond', 'club'];
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
  const cards = [];

  suits.forEach(suit => {
    ranks.forEach(rank => {
      cards.push({ suit, rank, version: Math.random() > 0.5 ? '1' : '2' });
    });
  });

  // O 카드 추가
  for (let i = 1; i <= 4; i++) {
    cards.push({ suit: 'o', version: i.toString() });
  }

  return cards;
};

const CardBackground = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const allCards = generateCards();
    // 카드를 랜덤하게 섞고 각 줄에 필요한 만큼만 사용
    const shuffledCards = [...allCards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards.slice(0, 20)); // 총 20장만 사용 (각 줄 10장씩)
  }, []);

  const getCardImage = (card) => {
    try {
      const fileName = card.rank 
        ? `${card.suit}_${card.rank}_${card.version}` 
        : `${card.suit}_${card.version}`;
      return require(`../assets/cards/${fileName}.svg`);
    } catch (error) {
      console.error(`Card not found:`, card);
      return null;
    }
  };

  // 카드를 두 줄로 나누기
  const firstRow = cards.slice(0, 10);
  const secondRow = cards.slice(10, 20);

  return (
    <BackgroundContainer>
      <CardRow $delay={0}>
        {[...firstRow, ...firstRow].map((card, index) => (
          <CardContainer key={`first-${index}`}>
            <CardImage src={getCardImage(card)} alt={`${card.suit} ${card.rank}`} />
          </CardContainer>
        ))}
      </CardRow>
      <CardRow $delay={-10}>
        {[...secondRow, ...secondRow].map((card, index) => (
          <CardContainer key={`second-${index}`} $isSecondRow>
            <CardImage src={getCardImage(card)} alt={`${card.suit} ${card.rank}`} />
          </CardContainer>
        ))}
      </CardRow>
    </BackgroundContainer>
  );
};

export default CardBackground; 