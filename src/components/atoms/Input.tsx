import React, { SetStateAction } from 'react';
import { styled } from 'styled-components';

type InputProps = {
  label: string;
  placeholder: string;
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
};

const Input = ({ props }: { props: InputProps }) => {
  return (
    <InputWrapper>
      <Label>{props.label}</Label>
      <SInput
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  input::placeholder {
    color: var(--gray-150, #d5d5d5);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
  }
`;

const Label = styled.div`
  color: var(--gray-gray-250, #808080);
  font-family: Pretendard-Medium;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
`;

const SInput = styled.input`
  border-radius: 10px;
  background: var(--gray-gray-50, #f6f6f6);

  width: 100%;
  height: 48px;
  padding: 8px 16px;
`;

export default Input;
