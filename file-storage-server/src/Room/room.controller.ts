import {
  Body,
  Controller,
  Delete,
  Get,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { RoomService } from './room.service';
import { CreateRoomDto } from './Dto/CreateRoomDto';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get('')
  async getAllRooms() {
    return this.roomService.getAllRooms();
  }

  @Post('create')
  async create(@Body() room: CreateRoomDto) {
    return await this.roomService.create(room);
  }

  @Delete('delete')
  async delete(@Query('id', ParseIntPipe) id: number) {
    return this.roomService.delete(id);
  }
}
