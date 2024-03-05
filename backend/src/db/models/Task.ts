import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";

import { User } from "./User";

export enum Priority {
  low = "low",
  medium = "medium",
  hidh = "hidh",
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  update_at!: Date;

  @Column({
    default: false,
  })
  isCompleted!: boolean;

  @Column({
    type: "enum",
    enum: Priority,
  })
  priority?: Priority;

  @ManyToOne(() => User, (user) => user.tasks)
  user!: User;
}
