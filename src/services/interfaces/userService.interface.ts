import User from "../../models/schema/user.schema";

export default interface UserServiceInterface {
    create(data:User):  Promise<User|null>;
}