/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEjemplo2 = /* GraphQL */ `
  query GetEjemplo2($id: ID!) {
    getEjemplo2(id: $id) {
      id
      descripcion
      Ejemplos {
        items {
          id
          ejemplo2ID
          ejemploID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listEjemplo2s = /* GraphQL */ `
  query ListEjemplo2s(
    $filter: ModelEjemplo2FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEjemplo2s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        descripcion
        Ejemplos {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEjemplo2s = /* GraphQL */ `
  query SyncEjemplo2s(
    $filter: ModelEjemplo2FilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEjemplo2s(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        descripcion
        Ejemplos {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      nuevo
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        nuevo
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTodos = /* GraphQL */ `
  query SyncTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        nuevo
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getEjemplo = /* GraphQL */ `
  query GetEjemplo($id: ID!) {
    getEjemplo(id: $id) {
      id
      name
      description
      ejemplo2s {
        items {
          id
          ejemplo2ID
          ejemploID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listEjemplos = /* GraphQL */ `
  query ListEjemplos(
    $filter: ModelEjemploFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEjemplos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        ejemplo2s {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEjemplos = /* GraphQL */ `
  query SyncEjemplos(
    $filter: ModelEjemploFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEjemplos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        ejemplo2s {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getEjemplo2Ejemplo = /* GraphQL */ `
  query GetEjemplo2Ejemplo($id: ID!) {
    getEjemplo2Ejemplo(id: $id) {
      id
      ejemplo2ID
      ejemploID
      ejemplo2 {
        id
        descripcion
        Ejemplos {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      ejemplo {
        id
        name
        description
        ejemplo2s {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listEjemplo2Ejemplos = /* GraphQL */ `
  query ListEjemplo2Ejemplos(
    $filter: ModelEjemplo2EjemploFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEjemplo2Ejemplos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ejemplo2ID
        ejemploID
        ejemplo2 {
          id
          descripcion
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        ejemplo {
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEjemplo2Ejemplos = /* GraphQL */ `
  query SyncEjemplo2Ejemplos(
    $filter: ModelEjemplo2EjemploFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEjemplo2Ejemplos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        ejemplo2ID
        ejemploID
        ejemplo2 {
          id
          descripcion
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        ejemplo {
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
