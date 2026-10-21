import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Rimuove il campo "Come arrivare" da Impostazioni sito: la sezione è stata
// eliminata dal frontend (pagina Contatti).
export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "site_settings_how_to_arrive_locales" CASCADE;
  DROP TABLE "site_settings_how_to_arrive" CASCADE;
  DROP TYPE "public"."enum_site_settings_how_to_arrive_mode";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_site_settings_how_to_arrive_mode" AS ENUM('car', 'train');
  CREATE TABLE "site_settings_how_to_arrive" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"mode" "enum_site_settings_how_to_arrive_mode" NOT NULL
  );

  CREATE TABLE "site_settings_how_to_arrive_locales" (
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );

  ALTER TABLE "site_settings_how_to_arrive" ADD CONSTRAINT "site_settings_how_to_arrive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_how_to_arrive_locales" ADD CONSTRAINT "site_settings_how_to_arrive_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings_how_to_arrive"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "site_settings_how_to_arrive_order_idx" ON "site_settings_how_to_arrive" USING btree ("_order");
  CREATE INDEX "site_settings_how_to_arrive_parent_id_idx" ON "site_settings_how_to_arrive" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "site_settings_how_to_arrive_locales_locale_parent_id_unique" ON "site_settings_how_to_arrive_locales" USING btree ("_locale","_parent_id");`)
}
