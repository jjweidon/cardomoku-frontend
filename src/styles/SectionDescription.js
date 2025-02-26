import styled from 'styled-components';

const SectionDescription = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 100;
  word-break: keep-all;
`;

export default SectionDescription; 