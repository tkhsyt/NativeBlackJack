import React from 'react';
import styled from 'styled-components/native';
import { Result } from '../../domain/declarations/models';

interface Props {
  resultData: Result;
}

export const ResultListItem: React.FC<Props> = ({ resultData: { result, playerScore, dealerScore } }) => {
  return (
    <ResultItem>
      <ResultText>{result}</ResultText>
      <Data>
        <Name>Player</Name>
        <Score>{playerScore}</Score>
      </Data>
      <Hyphenation>-</Hyphenation>
      <Data>
        <Name>Dealer</Name>
        <Score>{dealerScore}</Score>
      </Data>
    </ResultItem>
  );
};

const ResultItem = styled.View`
  flex-direction: row;
`;

const ResultText = styled.Text`
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
