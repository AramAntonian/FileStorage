import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  getAllUsers() {
    console.log('a');
    return this.userService.getAllUsers();
  }

  @Get('rooms')
  async getUserRooms(@Query('name') name: string) {
    return await this.userService.getUserRooms(name);
  }
}
