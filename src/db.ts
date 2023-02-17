import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  username: "postgres",
  password: "Yonelol2003@",
  port: 5432,
  database: "projectsdb",
  entities: [User],
  logging: true,
  synchronize: true,
});

