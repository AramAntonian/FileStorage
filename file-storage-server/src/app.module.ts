import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import * as process from 'node:process';
import { Users } from './entities/Users.entity';
import { Rooms } from './entities/Rooms.entity';
import { Files } from './entities/Files.entity';
import { AuthModule } from './Auth/auth.module';
import { RoomModule } from './Room/room.module';
import { FileModule } from './File/file.module';
import { UserModule } from './User/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST ?? '127.0.0.1',
      port: process.env.DB_PORT ? +process.env.DB_PORT : 5432,
      username: process.env.DB_USER ?? 'user',
      password: process.env.DB_PASSWORD ?? '1234',
      database: process.env.DB_NAME ?? 'file_storage',
      entities: [Users, Rooms, Files],
      synchronize: true,
    }),
    AuthModule,
    RoomModule,
    FileModule,
    UserModule,
  ],
})
export class AppModule {}
