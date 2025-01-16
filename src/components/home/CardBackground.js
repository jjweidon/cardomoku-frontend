import styled, { keyframes } from 'styled-components';

const slideAnimation = keyframes`
  0% {
    transform: translateX(-100%) translateY(0);
  }
  100% {
    transform: translateX(100%) translateY(-100%);
  }
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  overflow: hidden;
`;

const CardRow = styled.div`
  position: absolute;
  display: flex;
  gap: 2rem;
  animation: ${slideAnimation} 20s linear infinite;
  
  &:nth-child(2) {
    top: 60%;
    animation-delay: -10s;
  }
`;

const Card = styled.div`
  width: 100px;
  height: 140px;
  background: white;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.normal};
`;

const CardBackground = () => {
  return (
    <BackgroundContainer>
      <CardRow>
        {Array(10).fill(null).map((_, i) => (
          <Card key={`row1-${i}`} />
        ))}
      </CardRow>
      <CardRow>
        {Array(10).fill(null).map((_, i) => (
          <Card key={`row2-${i}`} />
        ))}
      </CardRow>
    </BackgroundContainer>
  );
};

export default CardBackground; 