import { gql } from 'graphql-tag';

export const itemSchema = gql`
    type Item {
        id: ID!
        name: String!
        inStock: Integer!
        frequency: String!
        store: String!
    }

    type Query {
        item: [Item!]!
    }
`