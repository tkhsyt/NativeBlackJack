import { formatSoftCount } from './index';

describe('ハンドに対するエースの評価ロジック', () => {
  it('ハンドの合計値が10以下であれば11を返す', () => {
    expect(formatSoftCount(0)).toEqual(11);
    expect(formatSoftCount(1)).toEqual(11);
    expect(formatSoftCount(10)).toEqual(11);
  });
  it('ハンドの合計値が10以上であれば1を返す', () => {
    expect(formatSoftCount(11)).toEqual(1);
  });
});
