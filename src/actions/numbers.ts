"use server";

import { sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { db } from "../database";
import { numbers } from "../database/schema";

export type AdjacentNumber = {
  id1: number;
  number1: number;
  id2: number;
  number2: number;
  sum: number;
};

export const queryAdjacentNumbers = async () => {
  const data = await db.execute(sql`
      select
        n1.id as id1,
        n1.number as number1,
        n2.id as id2,
        n2.number as number2,
        n1.number + n2.number as sum
      from ${numbers} n1
      left join ${numbers} n2 ON n2.id = n1.id + 1
  `);

  return data.rows as AdjacentNumber[];
};

const ADD_NUMBER_PARAMS_SCHEMA = z.object({
  number: z.number().min(-32767).max(32767),
});

export type AddNumberParams = z.infer<typeof ADD_NUMBER_PARAMS_SCHEMA>;

export const addNumber = async (req: AddNumberParams) => {
  const params = await ADD_NUMBER_PARAMS_SCHEMA.parseAsync(req);

  await db.execute(
    sql`insert into ${numbers} (number) values (${params.number})`
  );
  revalidatePath("/numbers");
};
