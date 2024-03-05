import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm"

import { PomodoroSession } from "./PomodoroSession"

@Entity()
export class PomodoroRound {
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

  @Column()
  totalSeconds!: number;

  @ManyToOne(
    () => PomodoroSession,
    (pomodoroSession) => pomodoroSession.pomodoroRounds,
    {
      onDelete: "CASCADE",
    }
  )
  pomodoroSession!: PomodoroSession;
}
