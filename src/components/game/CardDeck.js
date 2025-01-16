import React from 'react';
import styled from 'styled-components';

const DeckContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.normal};
`;

const DeckCount = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const CardStack = styled.div`
  position: relative;
  width: 100px;
  height: 140px;
  margin: 0 auto;
`;

const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  transform: rotate(${props => props.rotation}deg);
`;

const CardDeck = () => {
  return (
    <DeckContainer>
      <DeckCount>
        <h3>남은 카드</h3>
        <p>96장</p>
      </DeckCount>
      <CardStack>
        {[0, 2, 4].map(rotation => (
          <Card key={rotation} rotation={rotation} />
        ))}
      </CardStack>
    </DeckContainer>
  );
};

export default CardDeck; 