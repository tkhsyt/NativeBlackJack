import { gameResult } from './index';

describe('勝敗判定ロジック', () => {
  it('第一引数(Playerのハンド合計値)が第二引数(Dealerのハンド合計値)より21に近かったらWINと返す', () => {
    expect(gameResult(21, 20)).toEqual('WIN');
  });
  it('第一引数(Playerのハンド合計値)より第二引数(Dealerのハンド合計値)が21に近かったらLOSEと返す', () => {
    expect(gameResult(20, 21)).toEqual('LOSE');
  });
  it('第一引数(Playerのハンド合計値)と第二引数(Dealerのハンド合計値)が等しかったらLOSEと返す', () => {
    expect(gameResult(21, 21)).toEqual('LOSE');
  });
  it('第一引数(Playerのハンド合計値)と第二引数(Dealerのハンド合計値)が両方0でもLOSEと返す', () => {
    expect(gameResult(0, 0)).toEqual('LOSE');
  });
});
