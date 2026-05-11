import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './Users.entity';
import { Files } from './Files.entity';

@Entity()
export class Rooms {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Users, (user) => user.rooms)
  @JoinTable()
  users: Users[];

  @OneToMany(() => Files, (file) => file.room)
  files: Files[];
}
