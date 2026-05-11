import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Rooms } from './Rooms.entity';

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

  @ManyToOne(() => Rooms, (room) => room.files, { onDelete: 'CASCADE' })
  room: Rooms;
}
