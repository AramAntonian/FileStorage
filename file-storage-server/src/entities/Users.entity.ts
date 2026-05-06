import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Rooms } from './Rooms.entity';
import { Files } from './Files.entity';

@Entity()
export class Users {
  @PrimaryColumn()
  name: string;

  @Column()
  password: string;

  @OneToOne(() => Rooms, (room) => room.id, { onDelete: 'CASCADE' })
  @JoinColumn()
  room: Rooms;

  @OneToMany(() => Files, (file) => file.id, { onDelete: 'CASCADE' })
  files: Files;

  @ManyToMany(() => Rooms, (room) => room.users)
  rooms: Rooms[];
}
