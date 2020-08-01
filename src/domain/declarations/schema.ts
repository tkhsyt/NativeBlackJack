import { SCHEMA_NAME } from '../const/schemaName';

export const RESULT_SCHEMA = {
  name: SCHEMA_NAME.GAME_RESULT,
  properties: {
    id: 'int',
    result: 'string',
    playerScore: 'int',
    dealerScore: 'int',
  },
};
