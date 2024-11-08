import { MongoClient, ServerApiVersion } from 'mongodb';
import {MONGODB_URI,MONGODB_DATABASE} from '../config/mongoDb.config';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


// Get the database instance
const db = client.db(MONGODB_DATABASE);

(async () => {
    try {
        await client.connect();
        console.log('[x] MongoDB Connection is Ready');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
})();

// Export the database instance
export default db;