import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const CoinSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ProfileSection>
        <img src="/profile-placeholder.png" alt="프로필" width={40} height={40} />
        <span>닉네임</span>
      </ProfileSection>
      <CoinSection>
        <span>50 코인</span>
        <button>설정</button>
      </CoinSection>
    </HeaderContainer>
  );
};

export default Header; 