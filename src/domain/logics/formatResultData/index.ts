import { gameResult } from '../gameResult';

export const formatResultData = (playerScore: number, dealerScore: number) => {
  return {
    id: 111, // TODO: ランダムidを生成するロジック作る
    result: gameResult(playerScore, dealerScore),
    playerScore: playerScore,
    dealerScore: dealerScore,
  };
};
