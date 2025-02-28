import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// 애니메이션 설정
const slideAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const slideAnimationReverse = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// 백그라운드 컨테이너 스타일
const BackgroundContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 80%;
  overflow: hidden;
  transform: translate(-50%, -50%) rotate(30deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

// 카드 행 스타일
const CardRow = styled.div`
  display: flex;
  gap: 2rem;
  padding: 10px;
  width: max-content;
  animation: ${({ rowKey }) => rowKey === 1 ? slideAnimation : slideAnimationReverse} 300s linear infinite;
`;

// 카드 스타일
const Card = styled.div`
  width: 70px;
  height: 120px;
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
  const suits = ['spade', 'heart', 'diamond', 'clover'];
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

  return cards;
};

// 카드 배경 컴포넌트
const CardBackground = () => {
  const [cards, setCards] = useState([]);
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);

  // 카드 데이터와 이미지 로딩 처리
  useEffect(() => {
    const allCards = generateCards();
    const shuffledCards = [...allCards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards.slice(0, 90));  // 카드 수 조정

    // 비동기적으로 이미지 로드
    const loadImages = async () => {
      const cardImages = {};
      for (const card of shuffledCards) {
        const fileName = card.rank 
          ? `${card.suit}_${card.rank}_${card.version}` 
          : `${card.suit}_${card.version}`;
        
        try {
          const imageSrc = require(`../../assets/cards/${fileName}.svg`);
          cardImages[`${card.suit}_${card.rank}_${card.version}`] = imageSrc;
        } catch (error) {
          console.error(`Card not found:`, card);
        }
      }
      setImages(cardImages);
      setLoading(false);
    };

    loadImages();
  }, []);

  // 로딩 중일 때 표시할 내용
  if (loading) {
    return <div>이미지 로딩 중...</div>;
  }

  return (
    <BackgroundContainer>
      <CardRow rowKey={1}>
        {[...cards, ...cards, ...cards, ...cards].map((card, index) => (
          <Card 
            key={`card-row1-${index}`}
            $cardImage={images[`${card.suit}_${card.rank}_${card.version}`]}
          />
        ))}
      </CardRow>
      <CardRow rowKey={2}>
        {[...cards, ...cards, ...cards, ...cards].map((card, index) => (
          <Card 
            key={`card-row2-${index}`}
            $cardImage={images[`${card.suit}_${card.rank}_${card.version}`]}
          />
        ))}
      </CardRow>
    </BackgroundContainer>
  );
};

export default CardBackground;