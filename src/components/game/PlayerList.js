import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: clamp(2px, 0.75vh, 4px);
  padding: clamp(2px, 0.75vw, 4px);
  margin-left: 10px;
  box-shadow: ${({ theme }) => theme.shadows.normal};
  flex: 1;
  overflow-x: auto;
  overflow-y: hidden;
`;

const PlayerItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px;
  background-color: ${props => props.color};
  border-radius: 6px;
  flex-direction: column;
`;

const ProfileImage = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 50%;
`;

const Nickname = styled.div`
  font-size: clamp(8px, 0.8vw, 10px);
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