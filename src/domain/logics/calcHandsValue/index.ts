import { CARD_NUMBERS } from '../../const/cardNumbers';
import { CARD_ARRAY_ROLE } from '../../const/cardArrayRole';
import { CardType } from '../../declarations/models';
import { formatSoftCount } from '../formatSoftCount';
import { formatFaceCard } from '../formatFaceCard';

export const calcHandsValue = (hands: CardType[]) => {
  const handsValue = hands.map((hand) => hand[CARD_ARRAY_ROLE.NUMBER]);
  const handsInAces = handsValue.filter((value) => value === CARD_NUMBERS.ACE);
  const notHandsInAces = handsValue.filter((value) => value !== CARD_NUMBERS.ACE);
  const preHands = notHandsInAces.reduce((result, cardValue) => (result += formatFaceCard(cardValue)), 0);
  return handsInAces.reduce((result) => (result += formatSoftCount(result)), preHands);
};
