CREATE TABLE "grades" (
	"id" serial PRIMARY KEY NOT NULL,
	"class" char,
	"grade" smallint
);
--> statement-breakpoint
CREATE TABLE "numbers" (
	"id" serial PRIMARY KEY NOT NULL,
	"number" smallint
);
