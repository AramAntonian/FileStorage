import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../entities/Users.entity';
import { AuthController } from './auth.controller';
import { RoomModule } from '../Room/room.module';

@Module({
  imports: [TypeOrmModule.forFeature([Users]), RoomModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
