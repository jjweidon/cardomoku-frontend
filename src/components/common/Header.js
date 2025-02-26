import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: ${({ theme }) => theme.shadows.normal};
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const CoinSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

const SettingsButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

const Header = () => {
  const navigate = useNavigate();
  // 더미 데이터
  const userInfo = {
    profileImage: 'https://via.placeholder.com/40',
    nickname: '플레이어1',
    coins: 50
  };

  return (
    <HeaderContainer>
      <ProfileSection onClick={() => navigate('/mypage')}>
        <ProfileImage src={userInfo.profileImage} alt="프로필" />
        <span>{userInfo.nickname}</span>
      </ProfileSection>
      <CoinSection>
        <span>{userInfo.coins} 코인</span>
        <SettingsButton onClick={() => navigate('/settings')}>⚙️</SettingsButton>
      </CoinSection>
    </HeaderContainer>
  );
};

export default Header; 