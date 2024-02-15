import {Item} from '../model/Item';

export const itemResolvers = {
    Query: {
        items: async () => await Item.findAll()
    },
}