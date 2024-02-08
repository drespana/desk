const itemDef = `
    type Item {
        itemName: String,
        inStock: Integer,
        frequency: String,
        store: String
    }

    type Query {
        items: [Item]
    }
`;

export default itemDef;