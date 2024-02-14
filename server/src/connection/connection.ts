import * as mongodb from 'mongodb';
import Item from '../models/Item';
import Reminder from '../models/Reminder';
import Task from '../models/Task';

export const collections: {items?: mongodb.Collection<Item>} = {};
export const taskCollections: {tasks?: mongodb.Collection<Task>} = {};
export const reminderCollections: {reminders?: mongodb.Collection<Reminder>} = {};

export async function connectToDatabase(uri:string) {
    const client = new mongodb.MongoClient(uri);

    await client.connect();

    const db = client.db("grocerydb");

    // await applySchemaValidation(db);

    const groceryCollection = db.collection<Item>("grocerycollection");
    collections.items = groceryCollection;

    const taskCollection = db.collection<Task>("taskcollection");
    taskCollections.tasks = taskCollection;

    const reminderCollection = db.collection<Reminder>("remindercollection");
    reminderCollections.reminders = reminderCollection;
}