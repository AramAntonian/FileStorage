import { RoomService } from './room.service';
import { CreateRoomDto } from './Dto/CreateRoomDto';
export declare class RoomController {
    private readonly roomService;
    constructor(roomService: RoomService);
    getAllRooms(): Promise<import("../entities/Rooms.entity").Rooms[]>;
    create(room: CreateRoomDto): Promise<{
        message: string;
        data: {
            name: string;
            users: import("../entities/Users.entity").Users[];
        } & import("../entities/Rooms.entity").Rooms;
    }>;
    delete(id: number): Promise<{
        message: string;
    }>;
    getOne(id: number): Promise<import("../entities/Rooms.entity").Rooms | null>;
}
