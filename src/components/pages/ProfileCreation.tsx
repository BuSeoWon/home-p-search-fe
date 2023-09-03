import { useState } from 'react';
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';
import { postHomep } from '../../apis/services/homepService';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import TagInput from '../atoms/TagInput';
import HomeP, { Item } from '../molecules/HomeP';

const ProfileCreation = () => {
  const navigate = useNavigate();
  const nickname = localStorage.getItem('nickname');
  const [url, setUrl] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const [one, setOne] = useState<Item | undefined>();
  const [two, setTwo] = useState<Item | undefined>();
  const [three, setThree] = useState<Item | undefined>();
  const [bg, setBg] = useState<Item | undefined>();

  const handleReset = () => {
    setOne(undefined);
    setTwo(undefined);
    setThree(undefined);
    setBg({
      code: 'BG_ITEM_BEACH',
      name: 'default',
      imageUrl: 'https://image.homepsearch.site/default/BG/beach.svg',
    });
    setUrl('');
    setTags([]);
  };

  const validatePost = () => {
    if (!one || !two || !three) {
      throw new Error('가구를 모두 선택해 주세요.');
    }
    if (tags.length < 1) {
      throw new Error('태그는 최소 한 개 이상 입력해 주세요.');
    }
  };

  const handlePostHomep = () => {
    try {
      validatePost();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
      return;
    }

    postHomep({
      nickname,
      tags,
      one: one?.code,
      two: two?.code,
      three: three?.code,
      bg: bg?.code,
      snsUrl: url,
    })
      .then((data) => {
        // ID 가ㅏ져오기
        navigate(`/profile/${data.uuid}`);
      })
      .catch((e) => {
        console.error(e.message);
      });
  };

  return (
    <IntroWrapper>
      <Title>{`${localStorage.getItem('nickname')} 님의 홈피`}</Title>
      <Main>
        <HomeP
          readOnly={false}
          one={one}
          two={two}
          three={three}
          bg={bg}
          setOne={setOne}
          setTwo={setTwo}
          setThree={setThree}
          setBg={setBg}
        />
        <InputContainer>
          <TagInput
            props={{
              tags,
              setTags,
            }}
          />
          <Input
            props={{
              label: 'URL',
              placeholder: 'URL 입력',
              value: url,
              setValue: setUrl,
            }}
          />
        </InputContainer>
        <ButtonContainer>
          <Button
            size={'medium'}
            disabled={false}
            fill={'weak'}
            text={'초기화'}
            onClick={handleReset}
          />
          <Button
            size={'full'}
            disabled={false}
            fill={'fill'}
            text={'홈피 만들기'}
            onClick={handlePostHomep}
          />
        </ButtonContainer>
      </Main>
    </IntroWrapper>
  );
};

const IntroWrapper = styled.div``;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.div`
  color: #2c2c2c;
  font-family: Pretendard-Regular;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 28px */

  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export default ProfileCreation;
