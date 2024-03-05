import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

import { Task } from "./Task";
import { TimeBlock } from "./TimeBlock";
import { PomodoroSession } from "./PomodoroSession";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  update_at!: Date;

  @Column({
    default: 50,
  })
  workInterval?: number;

  @Column({
    default: 10,
  })
  breakInterval?: number;

  @Column({
    default: 7,
  })
  intervalsCount?: number;

  @OneToMany(() => Task, (task) => task.user)
  tasks!: Task[];

  @OneToMany(() => TimeBlock, (timeBlock) => timeBlock.user)
  timeBlocks!: TimeBlock[];

  @OneToMany(() => PomodoroSession, (pomodoroSession) => pomodoroSession.user)
  pomodoroSessiones!: PomodoroSession[];
}
