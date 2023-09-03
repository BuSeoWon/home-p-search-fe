import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { getHomep } from '../../apis/services/homepService';
import cat from '../../assets/cat.svg';
import url from '../../assets/url.svg';
import Button from '../atoms/Button';
import Chip from '../atoms/Chip';
import HomeP, { Item } from '../molecules/HomeP';

const Profile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [homep, setHomep] = useState({
    nickname: '',
    one: undefined,
    two: undefined,
    three: undefined,
    bg: {
      code: 'BG_ITEM_BEACH',
      name: 'default',
      imageUrl: 'https://image.homepsearch.site/default/BG/beach.svg',
    } as Item,
    tags: [],
    url: '',
  });

  useEffect(() => {
    if (!id) return;

    getHomep(id).then((data) => {
      setHomep({
        one: data.one,
        two: data.two,
        three: data.three,
        bg: data.bg,
        nickname: data.nickname,
        tags: data.tags,
        url: data.snsUrl,
      });
    });
  }, [id]);

  return (
    <div>
      <Title>
        <Cat src={cat} alt={'cat'} />
        <Nickname>{homep.nickname} 님의 홈피</Nickname>
      </Title>
      <ChipList>
        {homep.tags.map((tag) => (
          <Chip text={`#${tag}`} key={tag} />
        ))}
      </ChipList>
      <HomeP
        readOnly={true}
        one={homep.one}
        two={homep.two}
        three={homep.three}
        bg={homep.bg}
      />
      <URLWrapper>
        <URLImg src={url} />
        <URL href={homep.url}>{homep.url}</URL>
      </URLWrapper>
      <ButtonContainer>
        <Button
          fill={'fill'}
          size={'full'}
          disabled={false}
          text={'홈피서지 더 둘러보기'}
          onClick={() => {}}
        />
        <div>
          <Button
            fill={'weak'}
            size={'full'}
            disabled={false}
            text={'공유하기'}
            onClick={() => {}}
          />

          <Button
            fill={'weak'}
            size={'full'}
            disabled={false}
            text={'새로 만들기'}
            onClick={() => navigate('/create')}
          />
        </div>
      </ButtonContainer>
    </div>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > div {
    display: flex;
    gap: 20px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 80px;
  margin-bottom: 12px;
`;

const Nickname = styled.div`
  color: #2c2c2c;
  font-family: Pretendard-Regular;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 28px */
`;

const URLWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 44px;
`;

const URL = styled.a`
  color: var(--gray-gray-300, #565656);
  font-family: Pretendard-Medium;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const URLImg = styled.img`
  width: 24px;
  height: 24px;
`;

const Cat = styled.img`
  width: 32px;
  height: 32px;
`;

const ChipList = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
`;

export default Profile;
