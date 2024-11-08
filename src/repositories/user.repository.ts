import UserRepositoryInterface from "./interfaces/userRepository.interface";
import UserModel from "../models/user.model";
import User from "../models/schema/user.schema";

export default class UserRepository implements UserRepositoryInterface {
    private userModel: UserModel

    constructor() {
        this.userModel = new UserModel();
    }

    async store(data: User): Promise<User | null> {
        return await this.userModel.create(data)
    }
}