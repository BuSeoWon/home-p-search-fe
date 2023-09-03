import React, { SetStateAction, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { getItemList } from '../../apis/services/homepService';
import plus from '../../assets/plus.svg';

export type Item = {
  imageUrl: string;
  code: string;
  name: string;
};

const ItemListItem = ({
  item,
  setItem,
}: {
  item: Item;
  setItem: React.Dispatch<SetStateAction<Item | undefined>> | undefined;
}) => {
  const handleChange = () => {
    if (setItem) setItem(item);
  };
  return <SItem src={item.imageUrl} onClick={handleChange} />;
};

const SItem = styled.img`
  width: 80px;
  height: 80px;
`;

const HomeP = ({
  readOnly,
  one,
  two,
  three,
  bg,
  setOne,
  setTwo,
  setThree,
  setBg,
}: {
  readOnly: boolean;
  one?: Item | undefined;
  two?: Item | undefined;
  three?: Item | undefined;
  bg?: Item | undefined;
  setOne?: React.Dispatch<SetStateAction<Item | undefined>>;
  setTwo?: React.Dispatch<SetStateAction<Item | undefined>>;
  setThree?: React.Dispatch<SetStateAction<Item | undefined>>;
  setBg?: React.Dispatch<SetStateAction<Item | undefined>>;
}) => {
  const [itemCategory, setItemCategory] = useState('');

  const [showItemList, setShowItemList] = useState(false);
  const [items, setItems] = useState<Item[]>();

  const handleShowItemList = (category: string) => {
    setShowItemList(true);
    setItemCategory(category);
  };

  useEffect(() => {
    if (itemCategory.length > 0) {
      getItemList(itemCategory)
        .then((data) => {
          setItems(data);
        })
        .catch((e) => console.error(e.message));
    }
  }, [itemCategory]);

  useEffect(() => {
    if (!readOnly && setBg) {
      setBg({
        code: 'BG_ITEM_BEACH',
        name: 'default',
        imageUrl: 'https://image.homepsearch.site/default/BG/beach.svg',
      } as Item);
    }
  }, [readOnly, setBg]);

  return (
    <HomePWrapper>
      <SHomeP>
        <HomePBox src={bg?.imageUrl} />
        {one || readOnly ? (
          <ItemImg
            $top={'40%'}
            $left={'1%'}
            src={one?.imageUrl}
            onClick={!readOnly ? () => handleShowItemList('one') : () => {}}
          />
        ) : (
          <Plus
            $top={'60%'}
            $left={'21%'}
            src={plus}
            onClick={() => handleShowItemList('one')}
          />
        )}
        {two || readOnly ? (
          <ItemImg
            $top={'16%'}
            $left={'17%'}
            src={two?.imageUrl}
            onClick={!readOnly ? () => handleShowItemList('one') : () => {}}
          />
        ) : (
          <Plus
            $top={'36%'}
            $left={'37%'}
            src={plus}
            onClick={() => handleShowItemList('two')}
          />
        )}
        {three || readOnly ? (
          <ItemImg
            $top={'34%'}
            $left={'54%'}
            src={three?.imageUrl}
            onClick={!readOnly ? () => handleShowItemList('one') : () => {}}
          />
        ) : (
          <Plus
            $top={'54%'}
            $left={'74%'}
            src={plus}
            onClick={() => handleShowItemList('three')}
          />
        )}
        {readOnly ? (
          <></>
        ) : (
          <Plus
            $top={'76%'}
            $left={'50%'}
            src={plus}
            onClick={() => handleShowItemList('bg')}
          />
        )}
      </SHomeP>
      {showItemList ? (
        <>
          <ItemList>
            {items?.map((item) => {
              let setItem;
              if (itemCategory === 'one') setItem = setOne;
              if (itemCategory === 'two') setItem = setTwo;
              if (itemCategory === 'three') setItem = setThree;
              if (itemCategory === 'bg') setItem = setBg;

              return (
                <ItemListItem item={item} setItem={setItem} key={item.code} />
              );
            })}
          </ItemList>
          <CopyRightsWrapper>
            <CopyRights>작가 macrovector 출처 Freepik</CopyRights>
          </CopyRightsWrapper>
        </>
      ) : (
        <></>
      )}
    </HomePWrapper>
  );
};

const CopyRightsWrapper = styled.div`
  display: flex;
  justify-content: right;
  width: 100%;
  padding: 4px 0;
`;

const CopyRights = styled.div`
  color: #cacddd;
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 11.2px */
`;

const ItemList = styled.div`
  display: flex;
  gap: 28px;
  width: calc(100% + 20px);
  /* height: 160px; */
  padding: 32px 0px 20.861px 27px;

  overflow: scroll;

  border-radius: 8px 0 0 8px;
  background: var(--system-white, #fff);
  box-shadow: 0px 0px 20px 0px rgba(183, 183, 183, 0.25);

  margin-top: 8px;
`;

const HomePWrapper = styled.div`
  /* position: relative; */
`;

const SHomeP = styled.div`
  position: relative;
`;

const HomePBox = styled.img`
  width: 100%;
`;

const Plus = styled.img<{
  $top: string;
  $left: string;
}>`
  position: absolute;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};

  width: 10%;
  height: 10%;
`;

const ItemImg = styled.img<{
  $top: string;
  $left: string;
}>`
  position: absolute;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};

  width: 50%;
  height: 50%;
`;

export default HomeP;
