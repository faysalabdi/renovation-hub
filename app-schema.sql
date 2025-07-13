CREATE TABLE "users" (
  "id" integer PRIMARY KEY,
  "username" varchar,
  "role" varchar,
  "created_at" timestamp,
  "email" email,
  "password_hash" password,
  "is_verified" boolean
);

CREATE TABLE "projects" (
  "id" integer PRIMARY KEY,
  "title" varchar,
  "requirements" text,
  "bids" integer NOT NULL,
  "status" varchar,
  "created_at" timestamp,
  "created_by" integer,
  "budget_range" varchar,
  "location" text,
  "timeline" varchar,
  "images" image
);

CREATE TABLE "user_profiles" (
  "user_id" integer,
  "email" email,
  "phone" varchar,
  "location" text,
  "bio" text,
  "profile_image" image,
  "skills" text,
  "experience_years" integer,
  "license_number" varchar,
  "verification_status" varchar
);

CREATE TABLE "project_requirements" (
  "project_id" integer,
  "trade_type" text,
  "description" text,
  "priority" varchar,
  "estimated_hours" integer
);

CREATE TABLE "bids" (
  "project_id" integer,
  "tradie_id" integer,
  "trade_type" varchar,
  "amount" integer,
  "timeline" integer,
  "proposal_text" text,
  "status" varchar
);

CREATE TABLE "project_teams" (
  "project_id" integer,
  "team_members" json,
  "total_cost" varchar,
  "total_timeline" text
);

COMMENT ON COLUMN "projects"."requirements" IS 'Content of the post';

ALTER TABLE "projects" ADD FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "user_profiles" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "project_requirements" ADD FOREIGN KEY ("project_id") REFERENCES "projects" ("id");

ALTER TABLE "bids" ADD FOREIGN KEY ("project_id") REFERENCES "projects" ("id");

ALTER TABLE "bids" ADD FOREIGN KEY ("tradie_id") REFERENCES "users" ("id");

ALTER TABLE "project_teams" ADD FOREIGN KEY ("project_id") REFERENCES "projects" ("id");
