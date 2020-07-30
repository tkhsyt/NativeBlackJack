import React, { FC } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';
import { resultSelector } from '../../../redux/selectors/game';
import { ResultListItem } from '../../atoms/ResultListItem';

export const GameResult: FC = () => {
  const playData = useSelector(resultSelector);

  return (
    <Component>
      <FlatList
        data={playData}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <ResultListItem resultData={item} />}
      />
    </Component>
  );
};

const Component = styled.View`
  background-color: #fff;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
