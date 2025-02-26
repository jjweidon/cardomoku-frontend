import styled from 'styled-components';
import GameTypeButton from './GameTypeButton';

const CancelButton = styled(GameTypeButton)`
  background-color: ${({ theme }) => theme.colors.notice};
  margin-top: 12px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 0.9;
  }
`;

export default CancelButton; 