// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Ejemplo } = initSchema(schema);

export {
  Todo,
  Ejemplo
};