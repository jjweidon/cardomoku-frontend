import React from 'react';
import styled from 'styled-components';

const DeckContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(1px, 0.5vh, 2px);
  padding: 10px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.white};
  flex: 0.3;
`;

const DeckCount = styled.div`
  text-align: center;
  
  h3 {
    font-size: clamp(0.7rem, 1.2vw, 0.9rem);
    margin-bottom: 2px;
  }
  
  p {
    font-size: clamp(0.7rem, 1.2vw, 0.9rem);
  }
`;

const CardDeck = () => {
  return (
    <DeckContainer>
      <DeckCount>
        <h3>남은 카드</h3>
        <p>96장</p>
      </DeckCount>
    </DeckContainer>
  );
};

export default CardDeck; 