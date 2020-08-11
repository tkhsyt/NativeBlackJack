import { formatFaceCard } from './index';

describe('フェイスカード（11,12,13）を10とみなすロジック', () => {
  it('11,12,13を10とみなす', () => {
    expect(formatFaceCard(11)).toEqual(10);
    expect(formatFaceCard(12)).toEqual(10);
    expect(formatFaceCard(13)).toEqual(10);
  });
  it('13以上も10とみなす', () => {
    expect(formatFaceCard(14)).toEqual(10);
  });

  it('10以下が入ってきた場合はそのまま返す', () => {
    expect(formatFaceCard(0)).toEqual(0);
    expect(formatFaceCard(9)).toEqual(9);
  });
});
