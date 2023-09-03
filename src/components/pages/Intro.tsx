import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';
import { getRandomHomep } from '../../apis/services/homepService';
import logo from '../../assets/logo.svg';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

const Intro = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');

  const validateNickname = () => {
    if (nickname.length < 1 || nickname.length > 12) {
      throw new Error('닉네임은 최대 12자까지 입력 가능합니다.');
    }
  };

  const saveNickname = () => {
    try {
      validateNickname();
    } catch (e) {
      if (e instanceof Error) alert(e.message);
      return;
    }

    localStorage.setItem('nickname', nickname);
    navigate('/create');
  };

  const lookAround = () => {
    getRandomHomep().then((data) => {
      navigate(`/profile/${data.uuid}`);
    });
  };

  useEffect(() => {
    const uuid = localStorage.getItem('uuid');
    if (uuid) {
      navigate(`/profile/${uuid}`);
    }
  }, [navigate]);

  return (
    <IntroWrapper>
      <Logo src={logo} alt={'홈피서지'} />
      <Main>
        <Input
          props={{
            label: '',
            placeholder: '닉네임을 입력해 주세요.',
            value: nickname,
            setValue: setNickname,
          }}
        />
        <Button
          fill={'fill'}
          size={'full'}
          disabled={false}
          text={'홈피서지 만들기'}
          onClick={saveNickname}
        />
      </Main>
      <Button
        fill={'weak'}
        size={'full'}
        disabled={false}
        text={'홈피서지  둘러보기'}
        onClick={lookAround}
      />
      <TeamWrapper>
        <Team>부 서 원</Team>
        <Member>김동호, 박현재, 유나은, 유재민, 최주은</Member>
      </TeamWrapper>
    </IntroWrapper>
  );
};

const TeamWrapper = styled.div`
  margin-top: 70px;
`;

const Team = styled.div`
  color: #f96f99;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 16.8px */
`;

const Member = styled.div`
  text-align: center;

  color: #a3a3a3;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 14px */
`;

const Logo = styled.img`
  margin-top: 66px;
  width: 137px;
  margin-bottom: 70px;
`;

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;

  margin-bottom: 89px;
`;

export default Intro;
