import { formatResultData } from './index';

describe('playerとdealerのハンドの合計値から戦績保存用のデータを作成する', () => {
  it('データ生成テスト', () => {
    expect(formatResultData(21, 20)).toEqual({
      id: 111,
      result: 'WIN',
      playerScore: 21,
      dealerScore: 20,
    });
  });
});
