import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Users } from './Users.entity';

@Entity()
export class Rooms {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Users, (users) => users.name, { onDelete: 'CASCADE' })
  user: Users;

  @ManyToMany(() => Users, (user) => user.rooms)
  @JoinTable()
  users: Users[];
}
