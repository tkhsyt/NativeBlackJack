import { judgeHandStatus } from './index';

describe('渡されたハンドの合計値から状態を返すロジック', () => {
  it('ハンドの合計値を渡したらstringにして結果を返す', () => {
    expect(judgeHandStatus(3)).toEqual('3');
  });
  it('0の場合もそのまま返す', () => {
    expect(judgeHandStatus(0)).toEqual('0');
  });

  it('21を渡したらBLACKJACK!と返す', () => {
    expect(judgeHandStatus(21)).toEqual('BLACKJACK!');
  });
  it('21以上を渡したらBUSTと返す', () => {
    expect(judgeHandStatus(22)).toEqual('BUST');
  });
  it('12~16を渡したら${number} stiff...と返す', () => {
    expect(judgeHandStatus(15)).toEqual('15 stiff...');
  });
});
