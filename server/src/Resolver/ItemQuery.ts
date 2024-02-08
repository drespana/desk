const { items } = require('../db/sample')

const itemRes = {
    itemsQuery: {
        items: () => items,
    },
};

export default itemRes;