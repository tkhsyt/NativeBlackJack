import { getInitialCards } from './index';
import { initialCardData } from '../../../__fixtures__/card';

describe('カードデータ生成ロジック', () => {
  it('タプル型のカード配列が生成される', () => {
    expect(getInitialCards()).toEqual(initialCardData);
  });
});
