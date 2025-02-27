import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import HomeContainer from '../styles/HomeContainer';
import Section from '../styles/Section';
import SectionTitle from '../styles/SectionTitle';
import SectionDescription from '../styles/SectionDescription';
import Button from '../styles/Button';
import Modal from '../styles/Modal';
import ModalContent from '../styles/ModalContent';
import Input from '../styles/Input';
import GameTypeButton from '../styles/GameTypeButton';
import CancelButton from '../styles/CancelButton';
import theme from '../styles/theme';

const Home = () => {
  const navigate = useNavigate();
  const { gameType } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const roomType = queryParams.get('type');
  const [modalType, setModalType] = useState(null);
  const [roomCode, setRoomCode] = useState('');

  const handleQuickJoin = (type) => {
    // 빠른 입장 로직
    navigate(`/game/quick-${type}`);
  };

  const handleCreateRoom = (type) => {
    // 방 생성 로직
    const newRoomCode = Math.random().toString(36).slice(2, 6).toUpperCase();
    navigate(`/game/${newRoomCode}?gameType=${type}`);
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
            <GameTypeButton onClick={() => handleQuickJoin('1vs1')}>1 : 1</GameTypeButton>
            <GameTypeButton onClick={() => handleQuickJoin('1vs1vs1')}>1 : 1 : 1</GameTypeButton>
            <GameTypeButton onClick={() => handleQuickJoin('2vs2')}>2 : 2</GameTypeButton>
            <CancelButton onClick={() => setModalType(null)}>취소</CancelButton>
          </ModalContent>
        );
      case 'create':
        return (
          <ModalContent>
            <SectionTitle>방 생성하기</SectionTitle>
            <GameTypeButton onClick={() => handleCreateRoom('1vs1')}>1 : 1</GameTypeButton>
            <GameTypeButton onClick={() => handleCreateRoom('1vs1vs1')}>1 : 1 : 1</GameTypeButton>
            <GameTypeButton onClick={() => handleCreateRoom('2vs2')}>2 : 2</GameTypeButton>
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

  const getPlayerColors = () => {
    switch (roomType) {
      case '1vs1':
        return [theme.colors.red, theme.colors.blue];
      case '1vs1vs1':
        return [theme.colors.red, theme.colors.blue, theme.colors.green];
      case '2vs2':
        return [theme.colors.red, theme.colors.blue, theme.colors.red, theme.colors.blue];
      default:
        return [];
    }
  };

  return (
    <HomeContainer>
      <Section>
        <SectionTitle>빠른 입장</SectionTitle>
        <SectionDescription>
          현재 대기 중인 방에 빠르게 입장하여 게임을 시작합니다
        </SectionDescription>
        <Button onClick={() => setModalType('quick')}>입장하기</Button>
      </Section>

      <Section>
        <SectionTitle>방 생성하기</SectionTitle>
        <SectionDescription>
          새로운 방을 생성하고 친구들을 초대하여 게임을 즐깁니다
        </SectionDescription>
        <Button onClick={() => setModalType('create')}>방 만들기</Button>
      </Section>

      <Section>
        <SectionTitle>코드로 입장하기</SectionTitle>
        <SectionDescription>
          친구가 공유한 6자리 방 코드를 입력하여 게임에 참여합니다
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