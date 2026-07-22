import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "site_settings_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email" varchar NOT NULL
  );

  CREATE TABLE "site_settings_emails_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );

  CREATE TABLE "site_settings_notices" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"date" varchar,
  	"active" boolean DEFAULT true
  );

  CREATE TABLE "site_settings_notices_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );

  ALTER TABLE "site_settings_emails" ADD CONSTRAINT "site_settings_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_emails_locales" ADD CONSTRAINT "site_settings_emails_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings_emails"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_notices" ADD CONSTRAINT "site_settings_notices_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_notices_locales" ADD CONSTRAINT "site_settings_notices_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings_notices"("id") ON DELETE cascade ON UPDATE no action;

  CREATE INDEX "site_settings_emails_order_idx" ON "site_settings_emails" USING btree ("_order");
  CREATE INDEX "site_settings_emails_parent_id_idx" ON "site_settings_emails" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "site_settings_emails_locales_locale_parent_id_unique" ON "site_settings_emails_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "site_settings_notices_order_idx" ON "site_settings_notices" USING btree ("_order");
  CREATE INDEX "site_settings_notices_parent_id_idx" ON "site_settings_notices" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "site_settings_notices_locales_locale_parent_id_unique" ON "site_settings_notices_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "site_settings_emails" CASCADE;
  DROP TABLE "site_settings_emails_locales" CASCADE;
  DROP TABLE "site_settings_notices" CASCADE;
  DROP TABLE "site_settings_notices_locales" CASCADE;`)
}
