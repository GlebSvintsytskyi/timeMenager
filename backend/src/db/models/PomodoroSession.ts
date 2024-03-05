import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";

import { User } from "./User";
import { PomodoroRound } from "./PomodoroRound";

@Entity()
export class PomodoroSession {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  update_at!: Date;

  @Column({
    default: false,
  })
  isCompleted?: boolean;

  @OneToMany(
    () => PomodoroRound,
    (pomodoroRound) => pomodoroRound.pomodoroSession
  )
  pomodoroRounds!: PomodoroRound[];

  @ManyToOne(() => User, (user) => user.pomodoroSessiones)
  user!: User;
}
