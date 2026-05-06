import { Rooms } from './Rooms.entity';
import { Files } from './Files.entity';
export declare class Users {
    name: string;
    password: string;
    room: Rooms;
    files: Files;
    rooms: Rooms[];
}
