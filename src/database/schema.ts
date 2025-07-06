import { pgEnum, pgTable, serial, smallint } from "drizzle-orm/pg-core";

export const numbers = pgTable("numbers", {
  id: serial("id").primaryKey(),
  number: smallint("number"),
});

export const subject = pgEnum("subject", ["Math", "Science", "History"]);

export const grades = pgTable("grades", {
  id: serial("id").primaryKey(),
  subject: subject(),
  grade: smallint(),
});
