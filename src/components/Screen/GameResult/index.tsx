import React, { FC } from 'react';
import styled from 'styled-components/native';

export const GameResult: FC = () => {
  return (
    <Component>
      <ResultList>
        <ResultItem>
          <Result>WIN</Result>
          <Data>
            <Name>Player</Name>
            <Score>21</Score>
          </Data>
          <Hyphenation>-</Hyphenation>
          <Data>
            <Name>Dealer</Name>
            <Score>20</Score>
          </Data>
        </ResultItem>
      </ResultList>
    </Component>
  );
};

const Component = styled.View`
  background-color: #fff;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const ResultList = styled.View`
  align-items: center;
`;

const ResultItem = styled.View`
  flex-direction: row;
`;

const Result = styled.Text`
  font-size: 30px;
  margin-right: 30px;
`;

const Name = styled.Text`
  font-size: 16px;
  margin-right: 5px;
`;

const Score = styled.Text`
  font-size: 30px;
`;

const Data = styled.View`
  flex-direction: row;
`;

const Hyphenation = styled.Text`
  font-size: 30px;
  margin: 0 10px;
`;
