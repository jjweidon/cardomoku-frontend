import styled from 'styled-components';

const Section = styled.div`
  width: 90%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 30px;
  box-shadow: ${({ theme }) => theme.shadows.normal};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;

export default Section; 