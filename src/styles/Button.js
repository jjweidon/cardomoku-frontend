import styled from 'styled-components';

const Button = styled.button`
  width: 80%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 10px 0;
  transition: opacity 0.2s;
  font-size: 1rem;

  &:hover {
    opacity: 0.9;
  }
`;

export default Button; 