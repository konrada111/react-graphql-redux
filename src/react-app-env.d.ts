/// <reference types="react-scripts" />

declare module "*.gql" {
  const src: DocumentNode | TypedDocumentNode<unknown, OperationVariables>
  export default src
}
