import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type Ejemplo2MetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EjemploMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type Ejemplo2EjemploMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Ejemplo2 {
  readonly id: string;
  readonly descripcion?: string | null;
  readonly Ejemplos?: (Ejemplo2Ejemplo | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Ejemplo2, Ejemplo2MetaData>);
  static copyOf(source: Ejemplo2, mutator: (draft: MutableModel<Ejemplo2, Ejemplo2MetaData>) => MutableModel<Ejemplo2, Ejemplo2MetaData> | void): Ejemplo2;
}

export declare class Ejemplo {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly ejemplo2s?: (Ejemplo2Ejemplo | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Ejemplo, EjemploMetaData>);
  static copyOf(source: Ejemplo, mutator: (draft: MutableModel<Ejemplo, EjemploMetaData>) => MutableModel<Ejemplo, EjemploMetaData> | void): Ejemplo;
}

export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly nuevo?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

export declare class Ejemplo2Ejemplo {
  readonly id: string;
  readonly ejemplo2: Ejemplo2;
  readonly ejemplo: Ejemplo;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Ejemplo2Ejemplo, Ejemplo2EjemploMetaData>);
  static copyOf(source: Ejemplo2Ejemplo, mutator: (draft: MutableModel<Ejemplo2Ejemplo, Ejemplo2EjemploMetaData>) => MutableModel<Ejemplo2Ejemplo, Ejemplo2EjemploMetaData> | void): Ejemplo2Ejemplo;
}