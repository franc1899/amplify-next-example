// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Ejemplo2, Ejemplo, Todo, Ejemplo2Ejemplo } = initSchema(schema);

export {
  Ejemplo2,
  Ejemplo,
  Todo,
  Ejemplo2Ejemplo
};