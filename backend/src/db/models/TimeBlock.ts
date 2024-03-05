import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";

import { User } from "./User";

@Entity()
export class TimeBlock {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  color?: string;

  @Column()
  duration!: number;

  @Column({
    default: 1,
  })
  order!: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  update_at!: Date;

  @ManyToOne(() => User, (user) => user.timeBlocks)
  user!: User;
}
