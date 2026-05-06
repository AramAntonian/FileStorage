import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/CreateUserDto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: CreateUserDto) {
    return await this.authService.login(body.name, body.password);
  }

  @Post('register')
  async register(@Body() body: CreateUserDto) {
    return await this.authService.register(body.name, body.password);
  }
}
