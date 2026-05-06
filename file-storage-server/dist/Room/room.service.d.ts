import { Repository } from 'typeorm';
import { Rooms } from '../entities/Rooms.entity';
import { CreateRoomDto } from './Dto/CreateRoomDto';
import { Users } from '../entities/Users.entity';
export declare class RoomService {
    private roomsRepo;
    private readonly usersRepo;
    constructor(roomsRepo: Repository<Rooms>, usersRepo: Repository<Users>);
    create(room: CreateRoomDto): Promise<{
        message: string;
    }>;
    getAllRooms(): Promise<Rooms[]>;
    delete(id: number): Promise<{
        message: string;
    }>;
    createForUser(name: string): Promise<{
        name: string;
    } & Rooms>;
}
