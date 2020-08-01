import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { store } from '../../../redux/store';
import {
  setHitDealer,
  setHitPlayer,
  setStandDealer,
  setStandPlayer,
  setInitializeGame,
} from '../../../redux/modules/game';
import { useDispatch, useSelector } from 'react-redux';
import { gameSelector } from '../../../redux/selectors/game';
import { DealerPanel } from '../../organisms/DealerPanel';
import { PlayerPanel } from '../../organisms/PlayerPanel';
import { judgeHandStatus } from '../../../domain/logics/judgeHandStatus';
import { calcHandsValue } from '../../../domain/logics/calcHandsValue';
import { ShowDownPanel } from '../../organisms/ShowDownPanel';
import { setResultData } from '../../../redux/modules/result';
import { formatResultData } from '../../../domain/logics/formatResultData';
import { writeResultData } from '../../../realm';
import Realm from 'realm';
import { RESULT_SCHEMA } from '../../../domain/declarations/schema';

export const GameTable: FC = () => {
  type AppDispatch = typeof store.dispatch;
  const dispatch: AppDispatch = useDispatch();
  const { playerHands, dealerHands, isStandPlayer, isStandDealer } = useSelector(gameSelector);

  useEffect(() => {
    dispatch(setInitializeGame());
    // TODO: createAsyncThunkを上手く使って起動時の読み込み処理かけたらイケてそう
    Realm.open({
      schema: [RESULT_SCHEMA],
    }).then((re) => {
      console.log(JSON.parse(JSON.stringify(re.objects(RESULT_SCHEMA.name))));
      re.close();
    });
  }, []);

  const handleHitPlayer = () => dispatch(setHitPlayer());
  const handleHitDealer = () => dispatch(setHitDealer());
  const handleStandPlayer = () => dispatch(setStandPlayer(true));
  const handleStandDealer = () => dispatch(setStandDealer(true));
  const handleReloadGame = (playerScore: number, dealerScore: number) => {
    dispatch(setInitializeGame());
    dispatch(setResultData(formatResultData(playerScore, dealerScore)));
    writeResultData(playerScore, dealerScore);
  };

  return (
    <Component>
      <ComponentInner>
        <DealerPanel
          dealerHands={dealerHands}
          isStandPlayer={isStandPlayer}
          handleHitDealer={handleHitDealer}
          handleStandDealer={handleStandDealer}
        />

        <PlayerPanel
          playerHands={playerHands}
          handleHitPlayer={handleHitPlayer}
          handleStandPlayer={handleStandPlayer}
        />

        <Text>{judgeHandStatus(calcHandsValue(playerHands))}</Text>

        {isStandPlayer && isStandDealer && (
          <ShowDownPanel
            playerScore={calcHandsValue(playerHands)}
            dealerScore={calcHandsValue(dealerHands)}
            handleReloadGame={handleReloadGame}
          />
        )}
      </ComponentInner>
    </Component>
  );
};

const Component = styled.View`
  background-color: #fff;
  height: 100%;
  justify-content: center;
  padding: 10px;
`;

const ComponentInner = styled.View``;
