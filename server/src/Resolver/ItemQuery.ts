import { gql } from 'graphql-tag';

const Resolvers = gql`
Query: {
    items: () => items
}
`

export default Resolvers;