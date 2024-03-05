import { DataSource } from "typeorm";
import dotenv from "dotenv";
import "reflect-metadata";

import { User } from "./models/User";
import { Task } from "./models/Task";
import { TimeBlock } from "./models/TimeBlock";
import { PomodoroSession } from "./models/PomodoroSession";
import { PomodoroRound } from "./models/PomodoroRound";

dotenv.config();

export const connection = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  subscribers: [],
  migrations: [],
  entities: [User, Task, TimeBlock, PomodoroSession, PomodoroRound],
});
