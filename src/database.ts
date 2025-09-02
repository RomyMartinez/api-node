import setupKnew, { Knex } from "knex";

export const config: Knex.Config = {
  useNullAsDefault: true,
  client: "sqlite",
  connection: {
    filename: "./db/app.db",
  },
  migrations: {
    extension: "ts",
    directory: "./db/migrations",
  },
};

export const knex = setupKnew({
  ...config,
});
