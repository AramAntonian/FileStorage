import { Repository } from 'typeorm';
import { Users } from '../entities/Users.entity';
export declare class UserService {
    private userRepo;
    constructor(userRepo: Repository<Users>);
    getUser(): string;
    getUserRooms(name: string): Promise<import("../entities/Rooms.entity").Rooms[]>;
    getAllUsers(): Promise<Users[]>;
}
