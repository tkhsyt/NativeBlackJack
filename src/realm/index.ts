import Realm from 'realm';
import { RESULT_SCHEMA } from '../domain/declarations/schema';
import { SCHEMA_NAME } from '../domain/const/schemaName';
import { formatResultData } from '../domain/logics/formatResultData';
// import { ResultSchema } from '../domain/declarations/models';

export function writeResultData(playerScore: number, dealerScore: number) {
  Realm.open({
    schema: [RESULT_SCHEMA],
  }).then((realm) => {
    realm.write(() => {
      realm.create(SCHEMA_NAME.GAME_RESULT, formatResultData(playerScore, dealerScore));
    });
    realm.close();
  });
}

export async function loadResultData() {
  const realm: Realm = await Realm.open({
    schema: [RESULT_SCHEMA],
    schemaVersion: 1,
  });
  return realm.objects(JSON.parse(JSON.stringify(RESULT_SCHEMA.name)));
}
