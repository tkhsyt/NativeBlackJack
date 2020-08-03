import { SCHEMA_NAME } from '../const/schemaName';
import { ResultSchema } from './models';

export const RESULT_SCHEMA: ResultSchema = {
  name: SCHEMA_NAME.GAME_RESULT,
  // TODO: propertiesの型情報とtsの型を揃えたくて揃えたくて震える
  properties: {
    id: 'int',
    result: 'string',
    playerScore: 'int',
    dealerScore: 'int',
  },
};

export const SCHEMA_LIST = [RESULT_SCHEMA];
