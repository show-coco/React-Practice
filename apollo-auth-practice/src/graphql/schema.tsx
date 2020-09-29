import gql from "graphql-tag";

export const typeDefs = gql`
  type Mutation {
    # Auth
    signIn(input: SignInParams!): AuthPayload
    # Account
    patchAccount(input: UpdataAccountParams!): PatchAccountPayload
    deleteAccount: DeleteAccountPayload
  }
  type Query {
    node(id: ID!): Node
    # Account
    currentAccount: Account
  }
  scalar Date
  scalar DateTime
  # Type ======================
  type Account implements Node {
    id: ID!
    email: String!
    name: String
    birthday: Date
    createdAt: DateTime
    updatedAt: DateTime
  }
  # Node interface for Realy specification
  interface Node {
    id: ID!
  }
  input SignUpParams {
    email: String!
    password: String!
    name: String
  }
  input SignInParams {
    email: String!
    password: String!
  }
  input UpdataAccountParams {
    name: String
  }
  type PatchAccountPayload {
    account: Account
  }
  type DeleteAccountPayload {
    account: Account
  }
  type AuthPayload {
    account: Account
    token: String
  }
  schema {
    query: Query
    mutation: Mutation
  }
`;
