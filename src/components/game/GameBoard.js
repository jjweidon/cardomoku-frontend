import React from 'react';
import styled from 'styled-components';
import { getCardImage } from '../../utils/cardImages';

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 2px;
  padding: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.shadows.normal};
  width: 100%;
  height: 100%;
  overflow: hidden;
  align-items: center;
  justify-items: center;
`;

const Cell = styled.div`
  width: clamp(24px, 3vw, 30px);
  height: clamp(32px, 4vw, 40px);
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.cardImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Chip = styled.div`
  position: absolute;
  width: clamp(16px, 2vw, 20px);
  height: clamp(16px, 2vw, 20px);
  border-radius: 50%;
  background-color: ${props => props.color};
  z-index: 1;
`;

const GameBoard = ({ gameType }) => {
  const cardImages = [
    // 1
    getCardImage('o', 'o', 1), getCardImage('spade', '2', 1), getCardImage('spade', '3', 1), getCardImage('spade', '4', 1), getCardImage('spade', '5', 1),
    getCardImage('spade', '6', 1), getCardImage('spade', '7', 1), getCardImage('spade', '8', 1), getCardImage('spade', '9', 1), getCardImage('o', 'o', 2),
    // 2
    getCardImage('clover', '6', 1), getCardImage('clover', '5', 1), getCardImage('clover', '4', 1), getCardImage('clover', '3', 1), getCardImage('clover', '2', 1),
    getCardImage('heart', 'a', 1), getCardImage('heart', 'k', 1), getCardImage('heart', 'q', 1), getCardImage('heart', '10', 1), getCardImage('spade', '10', 1),
    // 3
    getCardImage('clover', '7', 1), getCardImage('spade', 'a', 1), getCardImage('diamond', '2', 1), getCardImage('diamond', '3', 1), getCardImage('diamond', '4', 1),
    getCardImage('diamond', '5', 1), getCardImage('diamond', '6', 1), getCardImage('diamond', '7', 1), getCardImage('heart', '9', 1), getCardImage('spade', 'q', 1),
    // 4
    getCardImage('clover', '8', 1), getCardImage('spade', 'k', 1), getCardImage('clover', '6', 2), getCardImage('clover', '5', 2), getCardImage('clover', '4', 2),
    getCardImage('clover', '3', 2), getCardImage('clover', '2', 2), getCardImage('diamond', '8', 1), getCardImage('heart', '8', 1), getCardImage('spade', 'k', 2),
    // 5
    getCardImage('clover', '9', 1), getCardImage('spade', 'q', 2), getCardImage('clover', '7', 1), getCardImage('heart', '6', 1), getCardImage('heart', '5', 1),
    getCardImage('heart', '4', 1), getCardImage('heart', 'a', 2), getCardImage('diamond', '9', 1), getCardImage('heart', '7', 1), getCardImage('spade', 'a', 2),
    // 6
    getCardImage('clover', '10', 1), getCardImage('spade', '10', 2), getCardImage('clover', '8', 2), getCardImage('heart', '7', 2), getCardImage('heart', '2', 1),
    getCardImage('heart', '3', 1), getCardImage('heart', 'k', 2), getCardImage('diamond', '10', 1), getCardImage('heart', '6', 2), getCardImage('diamond', '2', 2),
    // 7
    getCardImage('clover', 'q', 1), getCardImage('spade', '9', 2), getCardImage('clover', '9', 2), getCardImage('heart', '8', 2), getCardImage('heart', '9', 2),
    getCardImage('heart', '10', 2), getCardImage('heart', 'q', 2), getCardImage('diamond', 'q', 1), getCardImage('heart', '5', 2), getCardImage('diamond', '3', 2),
    // 8
    getCardImage('clover', 'k', 1), getCardImage('spade', '8', 2), getCardImage('clover', '10', 2), getCardImage('clover', 'q', 2), getCardImage('clover', 'k', 2),
    getCardImage('clover', 'a', 1), getCardImage('diamond', 'a', 1), getCardImage('diamond', 'k', 1), getCardImage('heart', '4', 2), getCardImage('diamond', '4', 2),
    // 9
    getCardImage('clover', 'a', 2), getCardImage('spade', '7', 2), getCardImage('spade', '6', 2), getCardImage('spade', '5', 2), getCardImage('spade', '4', 2),
    getCardImage('spade', '3', 2), getCardImage('spade', '2', 2), getCardImage('heart', '2', 2), getCardImage('heart', '3', 2), getCardImage('diamond', '5', 2),
    // 10
    getCardImage('o', 'o', 3), getCardImage('diamond', 'a', 2), getCardImage('diamond', 'q', 2), getCardImage('diamond', 'k', 2), getCardImage('diamond', '10', 2),
    getCardImage('diamond', '9', 2), getCardImage('diamond', '8', 2), getCardImage('diamond', '7', 2), getCardImage('diamond', '6', 2), getCardImage('o', 'o', 4),
  ];

  // 10x10 보드 데이터
  const boardData = Array(100).fill(null).map((_, index) => ({
    id: index,
    cardImage: cardImages[index] || null, // 인덱스에 따라 카드 이미지를 설정합니다.
  }));

  return (
    <BoardContainer>
      {boardData.map(cell => (
        <Cell key={cell.id}>
          {cell.cardImage && <CardImage cardImage={cell.cardImage} />}
        </Cell>
      ))}
    </BoardContainer>
  );
};

export default GameBoard; 