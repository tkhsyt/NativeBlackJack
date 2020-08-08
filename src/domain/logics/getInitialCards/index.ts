import { CARD_NUMBERS } from '../../const/cardNumbers';
import { CARD_SUITS } from '../../const/cardSuits';
import { CardType } from '../../declarations/models';

// TODO: リファクタしてたらどっかでおかしくなったものの、なんでか調べてない
export const getInitialCards = () => {
  return Object.values(CARD_NUMBERS).flatMap((number) =>
    Object.values(CARD_SUITS).map((suit) => [suit, number]),
  ) as CardType[];
};
