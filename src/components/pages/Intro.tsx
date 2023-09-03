import { useState } from 'react';
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';
import logo from '../../assets/logo.svg';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

const Intro = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const saveNickname = () => {
    localStorage.setItem('nickname', nickname);
    navigate('/create');
  };

  const lookAround = () => {};

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
          text={'시작하기'}
          onClick={saveNickname}
        />
      </Main>
      <Button
        fill={'weak'}
        size={'full'}
        disabled={false}
        text={'홈피 둘러보기'}
        onClick={lookAround}
      />
    </IntroWrapper>
  );
};

const Logo = styled.img`
  margin-top: 200px;
  width: 137px;
  margin-bottom: 27px;
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
