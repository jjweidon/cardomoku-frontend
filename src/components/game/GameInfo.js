import React from 'react';
import styled from 'styled-components';

const InfoContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.normal};
`;

const TurnInfo = styled.div`
  margin-bottom: 20px;
`;

const BingoStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TeamInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TeamColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const GameInfo = () => {
  return (
    <InfoContainer>
      <TurnInfo>
        <h3>현재 턴</h3>
        <p>빨간팀 차례입니다</p>
      </TurnInfo>
      <BingoStatus>
        <h3>빙고 현황</h3>
        <TeamInfo>
          <div>
            <TeamColor color="red" />
            빨간팀
          </div>
          <span>1 빙고</span>
        </TeamInfo>
        <TeamInfo>
          <div>
            <TeamColor color="blue" />
            파란팀
          </div>
          <span>0 빙고</span>
        </TeamInfo>
      </BingoStatus>
    </InfoContainer>
  );
};

export default GameInfo; 