-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "states" (
    "state_id" int   NOT NULL,
    "state_name" varchar(50)   NOT NULL,
    CONSTRAINT "pk_states" PRIMARY KEY (
        "state_id"
     )
);

CREATE TABLE "overdose" (
    "state_name" varchar(30)   NOT NULL,
    "population" varchar(30)   NOT NULL,
    "deaths" varchar(30)   NOT NULL,
    "abbrev" varchar(4)   NOT NULL
);

CREATE TABLE "prescriber" (
    "state_name" varchar(30)   NOT NULL,
    "gender" varchar(4)   NOT NULL,
    "specialty" varchar(100)   NOT NULL
);

CREATE TABLE "age_adjusted_rate" (
    "location" varchar(30)   NOT NULL,
    "opioid_death_rate" varchar(10)   NOT NULL,
    "all_overdose_rate" varchar(10)   NOT NULL,
    "opioid_percent_change" varchar(10)   NOT NULL,
    "overdose_percent_change" varchar(10)   NOT NULL
);

ALTER TABLE "overdose" ADD CONSTRAINT "fk_overdose_state_name" FOREIGN KEY("state_name")
REFERENCES "states" ("state_name");

ALTER TABLE "prescriber" ADD CONSTRAINT "fk_prescriber_state_name" FOREIGN KEY("state_name")
REFERENCES "states" ("state_name");

ALTER TABLE "age_adjusted_rate" ADD CONSTRAINT "fk_age_adjusted_rate_location" FOREIGN KEY("location")
REFERENCES "states" ("state_name");

