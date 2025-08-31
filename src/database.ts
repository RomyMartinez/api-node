import setupKnew from "knex";

export const knex = setupKnew({
  useNullAsDefault: true,
  client: "sqlite",
  connection: {
    filename: "./tmp/app.db",
  },
});
