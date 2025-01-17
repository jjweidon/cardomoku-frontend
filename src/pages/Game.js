import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import GameBoard from '../components/game/GameBoard';
import PlayerList from '../components/game/PlayerList';
import CardDeck from '../components/game/CardDeck';
import PlayerCards from '../components/game/PlayerCards';
import { useParams } from 'react-router-dom';

const GameContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(100px, 12%) 1fr minmax(100px, 12%);
  gap: clamp(2px, 0.8vw, 6px);
  padding: clamp(2px, 0.8vw, 6px);
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(4px, 1.5vw, 12px);
  height: 100%;
`;

const BoardSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transform: scale(${props => props.scale});
  transform-origin: center center;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(2px, 0.8vw, 6px);
  height: 100%;
  overflow: hidden;
  padding: clamp(2px, 0.8vw, 6px);
`;

const Game = () => {
  const { gameType } = useParams();
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
        const scale = Math.min(scaleX, scaleY, 0.95);
        
        setBoardScale(scale);
      }
    };

    adjustBoardSize();
    window.addEventListener('resize', adjustBoardSize);
    return () => window.removeEventListener('resize', adjustBoardSize);
  }, []);

  return (
    <GameContainer>
      <LeftSection>
        <CardDeck />
        <PlayerList />
      </LeftSection>
      <BoardSection>
        <div ref={boardRef}>
          <GameBoard gameType={gameType} scale={boardScale} />
        </div>
      </BoardSection>
      <RightSection>
        <PlayerCards />
      </RightSection>
    </GameContainer>
  );
};

export default Game; 