import { Entity, Column, PrimaryColumn, ManyToMany } from 'typeorm';
import { Rooms } from './Rooms.entity';

@Entity()
export class Users {
  @PrimaryColumn()
  name: string;

  @Column()
  password: string;

  @ManyToMany(() => Rooms, (room) => room.users)
  rooms: Rooms[];
}
