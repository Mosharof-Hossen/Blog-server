import { Query } from "mongoose";

class QueryBuilder<T> {
    public modelQuery: Query<T[], T>;
    public query: Record<string, unknown>;

    constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
        this.modelQuery = modelQuery;
        this.query = query;
    }

    search(searchAbleFields: string[]) {
        const search = this?.query?.search;
        if (search) {
            this.modelQuery = this.modelQuery.find({
                $or: searchAbleFields.map((field) => ({
                    [field]: { $regex: search, $options: 'i' }
                }))
            })
        }
        return this
    }

    filter() {

        if (this?.query?.filter) {
            console.log(this?.query?.filter);
            this.modelQuery = this.modelQuery.find({ author: this?.query?.filter })
        }
        return this;
    }
}

export default QueryBuilder;