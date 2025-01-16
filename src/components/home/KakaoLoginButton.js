import styled from 'styled-components';

const Button = styled.button`
  width: 300px;
  height: 50px;
  background-color: #FEE500;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  z-index: 2;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const KakaoIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const ButtonText = styled.span`
  font-size: 1rem;
  color: #000000;
`;

const KakaoLoginButton = () => {
  const handleLogin = () => {
    // 카카오 로그인 로직 구현
  };

  return (
    <Button onClick={handleLogin}>
      <KakaoIcon src="/kakao-icon.png" alt="카카오 로고" />
      <ButtonText>카카오로 시작하기</ButtonText>
    </Button>
  );
};

export default KakaoLoginButton; 