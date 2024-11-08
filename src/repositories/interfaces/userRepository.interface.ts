import User from "../../models/schema/user.schema";
export default interface UserRepositoryInterface {
    create(data:User):  Promise<User|null>;
}