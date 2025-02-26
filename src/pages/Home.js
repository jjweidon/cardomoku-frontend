import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
`;

const Section = styled.div`
  width: 90%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 30px;
  box-shadow: ${({ theme }) => theme.shadows.normal};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 16px;
  text-align: center;
`;

const SectionDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  margin-bottom: 20px;
`;

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

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 24px;
`;

const ModalContent = styled.div`
  width: 90%;
  max-height: 80vh;
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 6px;
  padding: 0 10px;
  margin: 10px 0;
  font-size: 1rem;
`;

const GameTypeButton = styled(Button)`
  background-color: #363636;
  width: 90%;
  height: 45px;
  margin: 6px 0;
  
  &:hover {
    background-color: #4a4a4a;
  }
`;

const CancelButton = styled(GameTypeButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: 12px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 0.9;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const [modalType, setModalType] = useState(null);
  const [roomCode, setRoomCode] = useState('');

  const handleQuickJoin = (type) => {
    // 빠른 입장 로직
    navigate(`/game/quick-${type}`);
  };

  const handleCreateRoom = (type) => {
    // 방 생성 로직
    const newRoomCode = Math.random().toString(36).substr(2, 6).toUpperCase();
    navigate(`/game/${newRoomCode}`);
  };

  const handleJoinByCode = () => {
    if (roomCode.length === 6) {
      navigate(`/game/${roomCode}`);
    }
  };

  const renderModalContent = () => {
    switch (modalType) {
      case 'quick':
        return (
          <ModalContent>
            <SectionTitle>빠른 입장</SectionTitle>
            <GameTypeButton onClick={() => handleQuickJoin('1v1')}>1:1</GameTypeButton>
            <GameTypeButton onClick={() => handleQuickJoin('1v1v1')}>1:1:1</GameTypeButton>
            <GameTypeButton onClick={() => handleQuickJoin('2v2')}>2:2</GameTypeButton>
            <CancelButton onClick={() => setModalType(null)}>취소</CancelButton>
          </ModalContent>
        );
      case 'create':
        return (
          <ModalContent>
            <SectionTitle>방 생성하기</SectionTitle>
            <GameTypeButton onClick={() => handleCreateRoom('1v1')}>1:1</GameTypeButton>
            <GameTypeButton onClick={() => handleCreateRoom('1v1v1')}>1:1:1</GameTypeButton>
            <GameTypeButton onClick={() => handleCreateRoom('2v2')}>2:2</GameTypeButton>
            <CancelButton onClick={() => setModalType(null)}>취소</CancelButton>
          </ModalContent>
        );
      case 'code':
        return (
          <ModalContent>
            <SectionTitle>코드로 입장하기</SectionTitle>
            <Input
              type="text"
              maxLength={6}
              placeholder="방 코드 6자리 입력"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
            />
            <GameTypeButton onClick={handleJoinByCode}>입장하기</GameTypeButton>
            <CancelButton onClick={() => setModalType(null)}>취소</CancelButton>
          </ModalContent>
        );
      default:
        return null;
    }
  };

  return (
    <HomeContainer>
      <Section>
        <SectionTitle>빠른 입장</SectionTitle>
        <SectionDescription>
          현재 대기 중인 방에 빠르게 입장하여 게임을 시작합니다.
        </SectionDescription>
        <Button onClick={() => setModalType('quick')}>입장하기</Button>
      </Section>

      <Section>
        <SectionTitle>방 생성하기</SectionTitle>
        <SectionDescription>
          새로운 방을 생성하고 친구들을 초대하여 게임을 즐깁니다.
        </SectionDescription>
        <Button onClick={() => setModalType('create')}>방 만들기</Button>
      </Section>

      <Section>
        <SectionTitle>코드로 입장하기</SectionTitle>
        <SectionDescription>
          친구가 공유한 6자리 방 코드를 입력하여 게임에 참여합니다.
        </SectionDescription>
        <Button onClick={() => setModalType('code')}>코드 입력</Button>
      </Section>

      {modalType && (
        <Modal onClick={() => setModalType(null)}>
          <div onClick={(e) => e.stopPropagation()}>
            {renderModalContent()}
          </div>
        </Modal>
      )}
    </HomeContainer>
  );
};

export default Home; 