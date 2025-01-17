import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CardBackground from '../components/home/CardBackground';

const OnboardingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: clamp(2rem, 4vw, 3rem);
  z-index: 2;

  span {
    font-size: clamp(3.5rem, 8vw, 8.6rem);
    font-weight: 300
  }
`;

const KakaoButton = styled.img`
  width: clamp(200px, 40vw, 300px);
  cursor: pointer;
  z-index: 2;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Onboarding = () => {
  const navigate = useNavigate();

  const handleKakaoLogin = () => {
    navigate('/home');
  };

  return (
    <OnboardingContainer>
      <CardBackground />
      <Title><span>C</span>ardomoku</Title>
      <KakaoButton
        src="/static/images/kakao_login_button.png"
        alt="카카오 로그인"
        onClick={handleKakaoLogin}
      />
    </OnboardingContainer>
  );
};

export default Onboarding; 