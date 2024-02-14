import * as mongodb from 'mongodb';
import Item from '../model/Item';
// other imports

export const collections: {items?: mongodb.Collection<Item>} = {};
// other collections (user, task, reminder)

export async function connectToDatabase(uri:string) {
    const client = new mongodb.MongoClient(uri);
    await client.connect();
    const db = client.db("grocerydb");
    const groceryCollection = db.collection<Item>("grocerycollection");
    collections.items = groceryCollection;
}
