import { styled } from 'styled-components';

const Button = ({
  fill,
  size,
  disabled,
  text,
  onClick,
}: {
  fill: string;
  size: string;
  disabled: boolean;
  text: string;
  onClick: () => void;
}) => {
  let width = '98px';

  if (size === 'full') width = '100%';
  if (size === 'medium') width = '158px';
  if (size === 'small') width = '98px';

  let backgroundColor = 'var(--primary)';

  if (disabled) backgroundColor = 'var(--pink-100)';
  if (fill === 'weak') backgroundColor = 'var(--gray-050)';

  return (
    <SButton
      $color={backgroundColor}
      $isweak={String(fill === 'weak')}
      width={width}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </SButton>
  );
};

const SButton = styled.button<{
  width: string;
  disabled: boolean;
  $color: string;
  $isweak: string;
}>`
  width: ${(props) => props.width};
  background-color: ${(props) => props.$color};
  color: ${(props) => (props.$isweak === 'true' ? 'var(--pink-300)' : 'white')};

  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 25.2px */
`;

export default Button;
