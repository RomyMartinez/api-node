import { expect, it, beforeAll, afterAll, describe, beforeEach } from "vitest";
import { execSync } from "node:child_process";
import request from "supertest";
import { app } from "../src/app";

describe("Transactions routes", () => {
  beforeAll(async () => {
    await app.ready();
    execSync("npm run knex migrate:rollback");
    execSync("npm run knex migrate:latest");
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(async () => {
    try {
      execSync("npm run knex migrate:rollback");
      execSync("npm run knex migrate:latest");
    } catch (error) {
      // Se falhar por lock, desbloquear e tentar novamente
      execSync('sqlite3 db/app.db "DELETE FROM knex_migrations_lock;"');
      execSync("npm run knex migrate:rollback");
      execSync("npm run knex migrate:latest");
    }
  });

  it("user should be able to create a new transaction", async () => {
    const response = await request(app.server).post("/transactions").send({
      title: "New Transaction",
      amount: 100,
      type: "credit",
    });

    expect(response.status).toBe(201);
  });

  it("user should be able to list all transactions", async () => {
    const createTransactionResponse = await request(app.server)
      .post("/transactions")
      .send({
        title: "New Transaction",
        amount: 100,
        type: "credit",
      });

    const cookies = createTransactionResponse.get("Set-Cookie");

    const response = await request(app.server)
      .get("/transactions")
      .set("Cookie", cookies || [])
      .expect(200);

    expect(response.body.transactions).toEqual([
      expect.objectContaining({
        title: "New Transaction",
        amount: 100,
      }),
    ]);
  });

  it("user should be able to get a specific transaction", async () => {
    const createTransactionResponse = await request(app.server)
      .post("/transactions")
      .send({
        title: "New Transaction",
        amount: 100,
        type: "credit",
      });

    const cookies = createTransactionResponse.get("Set-Cookie");

    const listTransactionsResponse = await request(app.server)
      .get("/transactions")
      .set("Cookie", cookies || [])
      .expect(200);

    const transactionId = listTransactionsResponse.body.transactions[0].id;

    const response = await request(app.server)
      .get(`/transactions/${transactionId}`)
      .set("Cookie", cookies || [])
      .expect(200);

    expect(response.body.transaction).toEqual(
      expect.objectContaining({
        title: "New Transaction",
        amount: 100,
      })
    );
  });

  it("user should be able to get the summary of the transactions", async () => {
    const createTransactionResponse = await request(app.server)
      .post("/transactions")
      .send({
        title: "New Transaction",
        amount: 100,
        type: "credit",
      });

    const cookies = createTransactionResponse.get("Set-Cookie");

    const response = await request(app.server)
      .get("/transactions/summary")
      .set("Cookie", cookies || [])
      .expect(200);

    expect(response.body.summary).toEqual({ amount: 100 });
  });
});
