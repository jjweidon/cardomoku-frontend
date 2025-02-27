import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: clamp(4px, 1.5vh, 8px);
  padding: clamp(4px, 1.5vw, 8px);
  box-shadow: ${({ theme }) => theme.shadows.normal};
  flex: 1;
  overflow-x: auto;
  overflow-y: hidden;
`;

const PlayerItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${props => props.color};
  border-radius: 6px;
  flex-direction: column;
`;

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 50%;
`;

const Nickname = styled.div`
  font-size: clamp(10px, 1.2vw, 12px);
  color: ${({ theme }) => theme.colors.black};
`;

const PlayerList = () => {
  const gameType = '2vs2';

  const getPlayerColors = () => {
    switch (gameType) {
      case '1vs1':
        return [theme.colors.red, theme.colors.blue];
      case '1vs1vs1':
        return [theme.colors.red, theme.colors.blue, theme.colors.green];
      case '2vs2':
        return [theme.colors.red, theme.colors.blue, theme.colors.red, theme.colors.blue];
      default:
        return [];
    }
  };

  const playerColors = getPlayerColors();

  return (
    <ListContainer>
      {playerColors.map((color, index) => (
        <PlayerItem key={index} color={color}>
          <ProfileImage />
          <Nickname>Player {index + 1}</Nickname>
        </PlayerItem>
      ))}
    </ListContainer>
  );
};

export default PlayerList; 