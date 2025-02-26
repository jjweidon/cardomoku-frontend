import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CardBackground from '../components/onboarding/CardBackground';

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
  margin-bottom: clamp(2rem, 0.5vw, 3rem);
  z-index: 3;

  img {
    width: clamp(200px, 100vw, 500px);
    height: auto;
  }
`;

const KakaoButton = styled.img`
  width: clamp(200px, 40vw, 300px);
  cursor: pointer;
  z-index: 2;
  transition: transform 0.2s;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

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
      <Title>
        <img
          src="/static/logos/logo_text.png"
          alt="Cardomoku Logo"
        />
      </Title>
      <KakaoButton
        src="/static/images/kakao_login_button.png"
        alt="카카오 로그인"
        onClick={handleKakaoLogin}
      />
    </OnboardingContainer>
  );
};

export default Onboarding; 