import mongoDb from '../lib/mongoDb.lib';
import {
    Collection,
    Document,
    Filter,
    WithId,
    SortDirection,
    Sort,
    ObjectId,
    OptionalUnlessRequiredId,
    Timestamp
} from 'mongodb';

export default class BaseModel<T extends Document> {
    protected collection: Collection<T>;
    protected isSoftDelete: boolean;

    constructor(collectionName: string, isSoftDelete: boolean = true) {
        this.collection = mongoDb.collection<T>(collectionName);
        this.isSoftDelete = isSoftDelete;
    }

    // Function to get data with filters, pagination, and sorting
    public async find(
        filters: Filter<T> = {}, // Default to an empty object
        options: {
            page?: number; // Optional page number
            limit?: number; // Optional limit of documents per page
            sort?: { [key: string]: SortDirection }; // Optional sorting
        } = {} // Default to an empty object
    ): Promise<WithId<T>[]> {
        const {page = 1, limit = 10, sort} = options; // Default page to 1 and limit to 10
        const skip = (page - 1) * limit;
        const sortOption: Sort = sort || {}; // Default to an empty object if sort is undefined
        const cursor = this.collection.find(filters).sort(sortOption).skip(skip).limit(limit);
        return await cursor.toArray();
    }

    // Create a new document
    public async create(data: OptionalUnlessRequiredId<T>): Promise<WithId<T>> {
        // Set created_at if not already set, and always set updated_at
        const currentTimestamp = new Date();

        // Ensure created_at is set if not already present
        if (!data.created_at) {
            data.created_at = currentTimestamp;
        }

        // Always update updated_at
        data.updated_at = currentTimestamp;
        const result = await this.collection.insertOne(data);
        return {...data, _id: result.insertedId} as WithId<T>;
    }

    // Read a document by filters
    public async first(filter: Filter<T>): Promise<WithId<T> | null> {
        //const filter: Filter<T> = { _id: objectId } as Filter<T>;
        return await this.collection.findOne(filter);
    }

    // Update an existing document
    public async update(id: string, data: Partial<T>): Promise<WithId<T> | null> {
        const objectId = new ObjectId(id);
        // Set the current timestamp for `updated_at`
        const currentTimestamp = this.getCurrentTimeStamp;

        // Ensure updated_at is included in the update data
        data = {
            ...data,
            updated_at: currentTimestamp // Always set updated_at to current time
        };

        const result = await this.collection.findOneAndUpdate(
            {_id: objectId} as Filter<T>, // Ensure the filter type is correct
            {$set: data},
            {returnDocument: 'after'} // Return the updated document
        );
        return result ? result.value : null;
    }

    // Delete a document by ID
    public async delete(filter: Filter<T>): Promise<boolean> {
        // Set the current timestamp for `deleted_at`
        const currentTimestamp = this.getCurrentTimeStamp() // MongoDB Timestamp format

        // Prepare the data with `deleted_at` field
        // @ts-ignore
        const data: Partial<T> & { deleted_at: Timestamp } = { deleted_at: currentTimestamp };

        const result = await this.collection.findOneAndUpdate(
            filter, // Ensure the filter type is correct
            {$set: data},
            {returnDocument: 'after'} // Return the updated document
        );
        return result && result.value;
    }

    // Delete a document by ID
    public async forceDelete(filter: Filter<T>): Promise<boolean> {
        const result = await this.collection.deleteOne(filter); // Ensure the filter type is correct
        return result.deletedCount === 1;
    }

    private filterUpdateSoftDelete(filter: Filter<T>) {
        if (this.isSoftDelete) {
        }
    }

    private getCurrentTimeStamp(): Date {
        return new Date(); // Use the native JavaScript Date object for current timestamp
    }
}