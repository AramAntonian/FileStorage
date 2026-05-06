import { RoomService } from './room.service';
import { CreateRoomDto } from './Dto/CreateRoomDto';
export declare class RoomController {
    private readonly roomService;
    constructor(roomService: RoomService);
    getAllRooms(): Promise<import("../entities/Rooms.entity").Rooms[]>;
    create(room: CreateRoomDto): Promise<{
        message: string;
    }>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
