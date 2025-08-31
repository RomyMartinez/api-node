import fastify from "fastify";
import { knex } from "./database";

const app = fastify();

app.get("/", async () => {
  await knex.schema.createTable("users", (table) => {
    table.uuid("id").primary();
    table.text("name").notNullable();
    table.text("email").notNullable();
  });

  await knex.table("users").insert({
    id: crypto.randomUUID(),
    name: "John Doe",
    email: "john.doe@example.com",
  });

  const users = await knex("users").select("*");
  return users;
});

app.listen({ port: 3000 }).then(() => {
  console.log("Server is running on port 3000");
});
