/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
    }
  }
`;