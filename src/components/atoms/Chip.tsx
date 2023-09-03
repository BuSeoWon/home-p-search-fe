import { styled } from 'styled-components';
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
  return (
    <SChip $isRemovable={isRemovable || false}>
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
`;

const XButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Chip;
