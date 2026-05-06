import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Users } from './Users.entity';

@Entity()
export class Files {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  path: string;

  @Column()
  size: number;

  @OneToMany(() => Users, (user) => user.name)
  user: Users;
}
