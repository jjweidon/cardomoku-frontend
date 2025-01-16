import React from 'react';
import styled from 'styled-components';

const HandContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px 8px 0 0;
  box-shadow: ${({ theme }) => theme.shadows.normal};
`;

const Card = styled.div`
  width: 100px;
  height: 140px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  cursor: pointer;
  transition: transform 0.2s;
  background-image: url(${props => props.cardImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    transform: translateY(-10px);
  }
`;

const PlayerHand = () => {
  // 임시 카드 데이터
  const handCards = Array(6).fill(null);

  return (
    <HandContainer>
      {handCards.map((card, index) => (
        <Card key={index} cardImage={card?.image} />
      ))}
    </HandContainer>
  );
};

export default PlayerHand; 