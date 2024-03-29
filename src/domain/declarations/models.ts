import { CARD_NUMBERS } from '../const/cardNumbers';
import { CARD_SUITS } from '../const/cardSuits';
import { SCHEMA_NAME } from '../const/schemaName';

export type Suit = typeof CARD_SUITS[keyof typeof CARD_SUITS];
export type Number = typeof CARD_NUMBERS[keyof typeof CARD_NUMBERS];
export type CardType = [Suit, Number];

export interface GameState {
  deck: CardType[];
  playerHands: CardType[];
  isStandPlayer: boolean;
  dealerHands: CardType[];
  isStandDealer: boolean;
}

export type Result = {
  id: number;
  result: string;
  playerScore: number;
  dealerScore: number;
};

export interface ResultState {
  data: Result[];
}

type RealmTypeConverter<T> = T extends number ? 'int' : T extends string ? 'string' : never;

type DeepRealmTypeConverter<T> = {
  [key in keyof T]: RealmTypeConverter<T[key]>;
};

export type ResultSchema = {
  name: typeof SCHEMA_NAME.GAME_RESULT;
  properties: DeepRealmTypeConverter<Result>;
};
