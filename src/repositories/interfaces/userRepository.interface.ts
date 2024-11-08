import User from "../../models/schema/user.schema";
export default interface UserRepositoryInterface {
    store(data:User):  Promise<User|null>;
}