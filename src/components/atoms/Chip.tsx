import { useNavigate } from 'react-router';
import { styled } from 'styled-components';
import { getRandomHomepIdByTag } from '../../apis/services/homepService';
import x from '../../assets/x.svg';

const Chip = ({
  text,
  isRemovable,
  handleRemove,
}: {
  text: string;
  isRemovable?: boolean;
  handleRemove?: () => void;
}) => {
  const navigate = useNavigate();

  const navigateToRandomHomepByTag = () => {
    getRandomHomepIdByTag(text.slice(1))
      .then((data) => {
        navigate(`/profile/${data.uuid}`);
      })
      .catch((e) => {
        if (e instanceof Error) console.error(e.message);
      });
  };

  return (
    <SChip
      $isRemovable={isRemovable || false}
      onClick={isRemovable ? () => {} : navigateToRandomHomepByTag}
    >
      <div>{text}</div>
      {isRemovable ? (
        <XButton onClick={handleRemove}>
          <img src={x} alt={text} />
        </XButton>
      ) : (
        <></>
      )}
    </SChip>
  );
};

const SChip = styled.div<{ $isRemovable: boolean }>`
  display: flex;
  width: fit-content;
  height: 32px;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  background: ${(props) => (props.$isRemovable ? 'white' : 'var(--gray-050)')};

  color: var(--gray-300);
  font-family: Pretendard-Medium;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  border-radius: 8px;
  border: 1px solid
    ${(props) => (props.$isRemovable ? 'var(--gray-250)' : 'none')};

  word-break: keep-all;

  cursor: ${(props) => (props.$isRemovable ? '' : 'pointer')};
`;

const XButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Chip;
