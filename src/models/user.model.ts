import BaseModel from "./base.model";
import UserSchema from "./schema/user.schema";

export default class UserModel extends BaseModel<UserSchema> {
    constructor() {
        super('users');
    }
}