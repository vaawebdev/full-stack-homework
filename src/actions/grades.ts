"use server";

import { db } from "@/database";
import { grades } from "@/database/schema";
import { sql } from "drizzle-orm";
import z from "zod";

const ADD_GRADE_PARAMS_SCHEMA = z.object({
  subject: z.enum(["Math", "Science", "History"]),
  grade: z.number().min(0).max(100),
});

export type AddGradeActionParams = z.infer<typeof ADD_GRADE_PARAMS_SCHEMA>;

export const addGrade = async (req: AddGradeActionParams) => {
  const params = await ADD_GRADE_PARAMS_SCHEMA.parseAsync(req);

  await db.execute(
    sql`insert into ${grades} (subject, grade) values (${params.subject}, ${params.grade})`
  );
};
