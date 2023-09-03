import React, { SetStateAction, useState } from 'react';
import styled from 'styled-components';
import Chip from './Chip';

type TagInputProps = {
  tags: string[];
  setTags: React.Dispatch<SetStateAction<string[]>>;
};

const TagInput = ({ props }: { props: TagInputProps }) => {
  const [newTag, setNewTag] = useState('');
  const placeholder =
    props.tags.length === 0
      ? '나를 소개하는 태그를 추가해 주세요'
      : '태그 추가하기';

  const handleRemove = (index: number) => {
    const newTags = props.tags.slice();
    newTags.splice(index, 1);
    props.setTags(newTags);
  };

  const handleChangeTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTag.length > 0) {
      props.setTags([...props.tags, newTag]);
      setNewTag('');
    } else if (e.key === 'Backspace' && newTag.length === 0) {
      const newTags = props.tags.slice();
      newTags.splice(-1);
      props.setTags(newTags);
    }
  };

  return (
    <TagInputWrapper>
      <Label>해시태그</Label>
      <InputWrapper>
        <ChipList>
          {props.tags.map((tag, index) => (
            <Chip
              text={tag}
              key={tag}
              isRemovable={true}
              handleRemove={() => handleRemove(index)}
            />
          ))}

          {props.tags.length < 3 ? (
            <SInput
              placeholder={placeholder}
              onKeyUp={handleChangeTag}
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
            />
          ) : (
            <></>
          )}
        </ChipList>
      </InputWrapper>
    </TagInputWrapper>
  );
};

const TagInputWrapper = styled.div`
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

const InputWrapper = styled.div`
  display: flex;
  border-radius: 10px;
  background: var(--gray-gray-50, #f6f6f6);

  width: 100%;
  min-height: 48px;
  padding: 8px 16px;
`;

const SInput = styled.input`
  width: 100%;
  padding: 6px 0;
  background: var(--gray-gray-50, #f6f6f6);
`;

const ChipList = styled.div`
  display: flex;
  gap: 2px;
  margin-right: 2px;
  flex-wrap: wrap;
  width: 100%;
`;

export default TagInput;
