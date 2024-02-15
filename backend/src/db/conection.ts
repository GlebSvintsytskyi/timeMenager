import { Sequelize } from "sequelize-typescript"
import {config, dialect} from "./config"

const connection = new Sequelize({
  dialect: dialect,
  host: config.HOST,
  username: config.USER,
  password: config.PASSWORD,
  database: config.DB
});

export default connection;