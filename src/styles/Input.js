import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 6px;
  padding: 0 10px;
  margin: 10px 0;
  font-size: 1rem;
`;

export default Input; 