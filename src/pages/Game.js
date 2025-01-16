import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import GameBoard from '../components/game/GameBoard';
import PlayerHand from '../components/game/PlayerHand';
import GameInfo from '../components/game/GameInfo';
import CardDeck from '../components/game/CardDeck';

const GameContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 250px 1fr 250px;
  grid-template-rows: 1fr auto;
  gap: clamp(8px, 1.5vw, 16px);
  padding: clamp(8px, 1.5vw, 16px);
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
`;

const BoardSection = styled.div`
  grid-column: 2;
  grid-row: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(${props => props.scale});
`;

const InfoSection = styled.div`
  grid-column: 3;
  grid-row: 1;
`;

const DeckSection = styled.div`
  grid-column: 1;
  grid-row: 1;
`;

const HandSection = styled.div`
  grid-column: 1 / -1;
  grid-row: 2;
  display: flex;
  justify-content: center;
  gap: clamp(8px, 1.5vw, 16px);
  padding: clamp(8px, 1.5vw, 16px);
`;

const Card = styled.div`
  width: clamp(50px, 7vw, 70px);
  height: clamp(70px, 9.8vw, 98px);
  border-radius: 4px;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shadows.normal};
`;

const Game = () => {
  const [boardScale, setBoardScale] = useState(1);
  const boardRef = useRef(null);

  useEffect(() => {
    const adjustBoardSize = () => {
      if (boardRef.current) {
        const container = boardRef.current.parentElement;
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const boardWidth = boardRef.current.scrollWidth;
        const boardHeight = boardRef.current.scrollHeight;
        
        const scaleX = containerWidth / boardWidth;
        const scaleY = containerHeight / boardHeight;
        const scale = Math.min(scaleX, scaleY, 1);
        
        setBoardScale(scale);
      }
    };

    adjustBoardSize();
    window.addEventListener('resize', adjustBoardSize);
    return () => window.removeEventListener('resize', adjustBoardSize);
  }, []);

  return (
    <GameContainer>
      <DeckSection>
        <CardDeck />
      </DeckSection>
      <BoardSection scale={boardScale} ref={boardRef}>
        <GameBoard />
      </BoardSection>
      <InfoSection>
        <GameInfo />
      </InfoSection>
      <HandSection>
        <PlayerHand />
      </HandSection>
    </GameContainer>
  );
};

export default Game; 