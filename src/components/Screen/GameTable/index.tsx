import React, { FC, useEffect } from 'react';
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

export const GameTable: FC = () => {
  type AppDispatch = typeof store.dispatch;
  const dispatch: AppDispatch = useDispatch();
  const { playerHands, dealerHands, isStandPlayer, isStandDealer } = useSelector(gameSelector);

  useEffect(() => {
    dispatch(setInitializeGame());
  }, []);

  const handleHitPlayer = () => dispatch(setHitPlayer());
  const handleHitDealer = () => dispatch(setHitDealer());
  const handleStandPlayer = () => dispatch(setStandPlayer(true));
  const handleStandDealer = () => dispatch(setStandDealer(true));
  const handleReloadGame = () => dispatch(setInitializeGame());

  return (
    <Component>
      <DealerPanel
        dealerHands={dealerHands}
        isStandPlayer={isStandPlayer}
        handleHitDealer={handleHitDealer}
        handleStandDealer={handleStandDealer}
      />
      <PlayerPanel playerHands={playerHands} handleHitPlayer={handleHitPlayer} handleStandPlayer={handleStandPlayer} />

      <Text>{judgeHandStatus(calcHandsValue(playerHands))}</Text>

      {isStandPlayer && isStandDealer && (
        <ShowDownPanel
          playerScore={calcHandsValue(playerHands)}
          dealerScore={calcHandsValue(dealerHands)}
          handleReloadGame={handleReloadGame}
        />
      )}
    </Component>
  );
};

const Component = styled.View`
  width: 90%;
`;
