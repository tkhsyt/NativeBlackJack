import { calcHandsValue } from './index';
import { pattern1, pattern2, pattern3, pattern4 } from '../../../__fixtures__/handPattern';

describe('ハンドの合計値を計算するロジック', () => {
  it('ハンドがA一枚の時 合計値は11になる', () => {
    expect(calcHandsValue(pattern1)).toEqual(11);
  });
  it('ハンドがAと10の時 合計値は21になる', () => {
    expect(calcHandsValue(pattern2)).toEqual(21);
  });
  it('ハンドがJとQの時 合計値は20になる', () => {
    expect(calcHandsValue(pattern3)).toEqual(20);
  });
  it('ハンドがA,10,Aの時 合計値は11になる', () => {
    expect(calcHandsValue(pattern4)).toEqual(11);
  });
});
