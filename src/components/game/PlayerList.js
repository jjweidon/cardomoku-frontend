import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(4px, 1.5vh, 8px);
  padding: clamp(4px, 1.5vw, 8px);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  box-shadow: ${({ theme }) => theme.shadows.normal};
  flex: 1;
  overflow-y: auto;
`;

const PlayerItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px;
`;

const ProfileImage = styled.div`
  width: clamp(24px, 3vw, 32px);
  height: clamp(24px, 3vw, 32px);
  border-radius: 50%;
  border: 2px solid ${props => props.color};
  box-shadow: ${props => props.isCurrentTurn ? `0 0 6px ${props.color}` : 'none'};
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

const PlayerName = styled.span`
  font-size: clamp(0.7rem, 1.2vw, 0.9rem);
  color: ${({ theme }) => theme.colors.black};
`;

const PlayerList = () => {
  const { gameType } = useParams();

  const getPlayers = () => {
    switch (gameType) {
      case '1v1':
        return [
          { id: 1, name: "Player 1", color: "#FF4444", isCurrentTurn: true },
          { id: 2, name: "Player 2", color: "#4444FF", isCurrentTurn: false }
        ];
      case '1v1v1':
        return [
          { id: 1, name: "Player 1", color: "#FF4444", isCurrentTurn: true },
          { id: 2, name: "Player 2", color: "#4444FF", isCurrentTurn: false },
          { id: 3, name: "Player 3", color: "#44FF44", isCurrentTurn: false }
        ];
      case '2v2':
        return [
          { id: 1, name: "Red 1", color: "#FF4444", isCurrentTurn: true },
          { id: 2, name: "Blue 1", color: "#4444FF", isCurrentTurn: false },
          { id: 3, name: "Red 2", color: "#FF4444", isCurrentTurn: false },
          { id: 4, name: "Blue 2", color: "#4444FF", isCurrentTurn: false }
        ];
      default:
        return [];
    }
  };

  const players = getPlayers();

  return (
    <ListContainer>
      {players.map(player => (
        <PlayerItem key={player.id}>
          <ProfileImage 
            src={`/static/images/profile${player.id}.jpg`}
            color={player.color}
            isCurrentTurn={player.isCurrentTurn}
          />
          <PlayerName>{player.name}</PlayerName>
        </PlayerItem>
      ))}
    </ListContainer>
  );
};

export default PlayerList; 