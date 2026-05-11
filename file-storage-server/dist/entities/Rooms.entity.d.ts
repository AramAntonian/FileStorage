import { Users } from './Users.entity';
import { Files } from './Files.entity';
export declare class Rooms {
    id: number;
    name: string;
    users: Users[];
    files: Files[];
}
