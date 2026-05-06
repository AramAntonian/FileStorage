import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/CreateUserDto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: CreateUserDto): Promise<import("@nestjs/common").HttpException | {
        name: string;
    }>;
    register(body: CreateUserDto): Promise<import("@nestjs/common").HttpException>;
}
