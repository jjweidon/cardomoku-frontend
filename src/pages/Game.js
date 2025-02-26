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
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  flex: 1;
`;

const CenterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  flex: 4;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex: 1;
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
      <TopSection>
        <CardDeck />
        <PlayerList />
      </TopSection>
      <CenterSection>
        <GameBoard gameType={gameType} scale={boardScale} />
      </CenterSection>
      <BottomSection>
        <PlayerCards />
      </BottomSection>
    </GameContainer>
  );
};

export default Game; 