import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
`;

export default HomeContainer; 