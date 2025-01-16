import React from 'react';
import styled from 'styled-components';

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 4px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.normal};
`;

const Cell = styled.div`
  width: 60px;
  height: 84px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
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
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => props.color};
  z-index: 1;
`;

const GameBoard = () => {
  // 임시 보드 데이터
  const boardData = Array(100).fill(null).map((_, index) => ({
    id: index,
    card: null,
    chip: null
  }));

  return (
    <BoardContainer>
      {boardData.map(cell => (
        <Cell key={cell.id}>
          {cell.card && <CardImage cardImage={cell.card} />}
          {cell.chip && <Chip color={cell.chip} />}
        </Cell>
      ))}
    </BoardContainer>
  );
};

export default GameBoard; 