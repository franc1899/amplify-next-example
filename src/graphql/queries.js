/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      nuevo
      createdAt
      updatedAt
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEjemplo = /* GraphQL */ `
  query GetEjemplo($id: ID!) {
    getEjemplo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
