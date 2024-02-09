import { gql } from 'graphql-tag';

const Schema = gql`
    type Item {
        itemName: String
        inStock: Integer
        frequency: String
        store: String
    }

    type Query {
        getAllItems: [Item]
    }
`

export default Schema;