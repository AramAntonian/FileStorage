import { HttpException } from '@nestjs/common';
import { Users } from '../entities/Users.entity';
import { Repository } from 'typeorm';
import { RoomService } from '../Room/room.service';
export declare class AuthService {
    private usersRepo;
    private readonly roomService;
    constructor(usersRepo: Repository<Users>, roomService: RoomService);
    login(name: string, password: string): Promise<HttpException | {
        name: string;
    }>;
    register(name: string, password: string): Promise<HttpException>;
}
