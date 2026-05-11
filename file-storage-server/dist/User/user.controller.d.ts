import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<import("../entities/Users.entity").Users[]>;
    getUserRooms(name: string): Promise<import("../entities/Rooms.entity").Rooms[]>;
}
