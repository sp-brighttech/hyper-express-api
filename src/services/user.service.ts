import UserServiceInterface from "./interfaces/userService.interface";
import UserRepositoryInterface from "../repositories/interfaces/userRepository.interface";
import UserRepository from "../repositories/user.repository";
import User from "../models/schema/user.schema";

export default class UserService implements UserServiceInterface {
    private userRepository: UserRepositoryInterface;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public async create(data: User): Promise<User | null> {
        return this.userRepository.create(data);
    }
}