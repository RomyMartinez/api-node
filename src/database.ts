import setupKnew, { Knex } from "knex";
import { env } from "./env";

export const config: Knex.Config = {
  useNullAsDefault: true,
  client: "sqlite",
  connection: {
    filename: env.DATABASE_URL,
  },
  migrations: {
    extension: "ts",
    directory: "./db/migrations",
  },
};

export const knex = setupKnew({
  ...config,
});
