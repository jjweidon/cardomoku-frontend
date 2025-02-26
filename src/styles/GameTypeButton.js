import styled from 'styled-components';
import Button from './Button';

const GameTypeButton = styled(Button)`
  background-color: #363636;
  width: 100%;
  height: 45px;
  margin: 6px 10px;
  
  &:hover {
    background-color: #4a4a4a;
  }
`;

export default GameTypeButton; 