import Realm from 'realm';
import { RESULT_SCHEMA } from '../domain/declarations/schema';
import { SCHEMA_NAME } from '../domain/const/schemaName';
import { formatResultData } from '../domain/logics/formatResultData';

export function writeResultData(playerScore: number, dealerScore: number) {
  Realm.open({
    schema: [RESULT_SCHEMA],
    schemaVersion: 1,
  }).then((realm) => {
    realm.write(() => {
      realm.create(SCHEMA_NAME.GAME_RESULT, formatResultData(playerScore, dealerScore));
    });
    realm.close();
  });
}
