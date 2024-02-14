import { gql } from 'graphql-tag';
import { itemSchema } from './item.schema';

const typeDefs = gql`
    ${itemSchema}
`

export default typeDefs;
