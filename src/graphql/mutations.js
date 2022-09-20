/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEjemplo2 = /* GraphQL */ `
  mutation CreateEjemplo2(
    $input: CreateEjemplo2Input!
    $condition: ModelEjemplo2ConditionInput
  ) {
    createEjemplo2(input: $input, condition: $condition) {
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
export const updateEjemplo2 = /* GraphQL */ `
  mutation UpdateEjemplo2(
    $input: UpdateEjemplo2Input!
    $condition: ModelEjemplo2ConditionInput
  ) {
    updateEjemplo2(input: $input, condition: $condition) {
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
export const deleteEjemplo2 = /* GraphQL */ `
  mutation DeleteEjemplo2(
    $input: DeleteEjemplo2Input!
    $condition: ModelEjemplo2ConditionInput
  ) {
    deleteEjemplo2(input: $input, condition: $condition) {
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
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
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
export const createEjemplo = /* GraphQL */ `
  mutation CreateEjemplo(
    $input: CreateEjemploInput!
    $condition: ModelEjemploConditionInput
  ) {
    createEjemplo(input: $input, condition: $condition) {
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
export const updateEjemplo = /* GraphQL */ `
  mutation UpdateEjemplo(
    $input: UpdateEjemploInput!
    $condition: ModelEjemploConditionInput
  ) {
    updateEjemplo(input: $input, condition: $condition) {
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
export const deleteEjemplo = /* GraphQL */ `
  mutation DeleteEjemplo(
    $input: DeleteEjemploInput!
    $condition: ModelEjemploConditionInput
  ) {
    deleteEjemplo(input: $input, condition: $condition) {
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
export const createEjemplo2Ejemplo = /* GraphQL */ `
  mutation CreateEjemplo2Ejemplo(
    $input: CreateEjemplo2EjemploInput!
    $condition: ModelEjemplo2EjemploConditionInput
  ) {
    createEjemplo2Ejemplo(input: $input, condition: $condition) {
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
export const updateEjemplo2Ejemplo = /* GraphQL */ `
  mutation UpdateEjemplo2Ejemplo(
    $input: UpdateEjemplo2EjemploInput!
    $condition: ModelEjemplo2EjemploConditionInput
  ) {
    updateEjemplo2Ejemplo(input: $input, condition: $condition) {
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
export const deleteEjemplo2Ejemplo = /* GraphQL */ `
  mutation DeleteEjemplo2Ejemplo(
    $input: DeleteEjemplo2EjemploInput!
    $condition: ModelEjemplo2EjemploConditionInput
  ) {
    deleteEjemplo2Ejemplo(input: $input, condition: $condition) {
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
