import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Allinea lo schema a Payload 3.91: nuova colonna di autenticazione sugli
// utenti (senza, il login all'admin fallisce) e indici sulle tabelle *_locales.
export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "reset_password_requested_at" timestamp(3) with time zone;
  CREATE INDEX IF NOT EXISTS "chiese_gallery_locales_parent_id_idx" ON "public"."chiese_gallery_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "chiese_locales_parent_id_idx" ON "public"."chiese_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "collezioni_items_locales_parent_id_idx" ON "public"."collezioni_items_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "collezioni_locales_parent_id_idx" ON "public"."collezioni_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "edifici_gallery_locales_parent_id_idx" ON "public"."edifici_gallery_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "edifici_locales_parent_id_idx" ON "public"."edifici_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_featured_cards_locales_parent_id_idx" ON "public"."home_featured_cards_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_locales_parent_id_idx" ON "public"."home_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_news_items_locales_parent_id_idx" ON "public"."home_news_items_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "museo_contatti_locales_parent_id_idx" ON "public"."museo_contatti_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "museo_libreria_books_locales_parent_id_idx" ON "public"."museo_libreria_books_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "museo_libreria_merchandise_locales_parent_id_idx" ON "public"."museo_libreria_merchandise_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "museo_locales_parent_id_idx" ON "public"."museo_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "museo_sede_fact_cards_locales_parent_id_idx" ON "public"."museo_sede_fact_cards_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "museo_sede_locales_parent_id_idx" ON "public"."museo_sede_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "museo_servizi_locales_parent_id_idx" ON "public"."museo_servizi_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "museo_servizi_services_locales_parent_id_idx" ON "public"."museo_servizi_services_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "museo_storia_sale_locales_parent_id_idx" ON "public"."museo_storia_sale_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "museo_storia_sections_locales_parent_id_idx" ON "public"."museo_storia_sections_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "museo_storia_side_images_locales_parent_id_idx" ON "public"."museo_storia_side_images_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pau_locales_parent_id_idx" ON "public"."pau_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pau_objectives_locales_parent_id_idx" ON "public"."pau_objectives_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pau_side_images_locales_parent_id_idx" ON "public"."pau_side_images_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "site_settings_emails_locales_parent_id_idx" ON "public"."site_settings_emails_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "site_settings_locales_parent_id_idx" ON "public"."site_settings_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "site_settings_notices_locales_parent_id_idx" ON "public"."site_settings_notices_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "site_settings_opening_hours_locales_parent_id_idx" ON "public"."site_settings_opening_hours_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "siti_archeologici_gallery_locales_parent_id_idx" ON "public"."siti_archeologici_gallery_locales" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "siti_archeologici_locales_parent_id_idx" ON "public"."siti_archeologici_locales" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "users" DROP COLUMN IF EXISTS "reset_password_requested_at";
  DROP INDEX IF EXISTS "chiese_gallery_locales_parent_id_idx";
  DROP INDEX IF EXISTS "chiese_locales_parent_id_idx";
  DROP INDEX IF EXISTS "collezioni_items_locales_parent_id_idx";
  DROP INDEX IF EXISTS "collezioni_locales_parent_id_idx";
  DROP INDEX IF EXISTS "edifici_gallery_locales_parent_id_idx";
  DROP INDEX IF EXISTS "edifici_locales_parent_id_idx";
  DROP INDEX IF EXISTS "home_featured_cards_locales_parent_id_idx";
  DROP INDEX IF EXISTS "home_locales_parent_id_idx";
  DROP INDEX IF EXISTS "home_news_items_locales_parent_id_idx";
  DROP INDEX IF EXISTS "museo_contatti_locales_parent_id_idx";
  DROP INDEX IF EXISTS "museo_libreria_books_locales_parent_id_idx";
  DROP INDEX IF EXISTS "museo_libreria_merchandise_locales_parent_id_idx";
  DROP INDEX IF EXISTS "museo_locales_parent_id_idx";
  DROP INDEX IF EXISTS "museo_sede_fact_cards_locales_parent_id_idx";
  DROP INDEX IF EXISTS "museo_sede_locales_parent_id_idx";
  DROP INDEX IF EXISTS "museo_servizi_locales_parent_id_idx";
  DROP INDEX IF EXISTS "museo_servizi_services_locales_parent_id_idx";
  DROP INDEX IF EXISTS "museo_storia_sale_locales_parent_id_idx";
  DROP INDEX IF EXISTS "museo_storia_sections_locales_parent_id_idx";
  DROP INDEX IF EXISTS "museo_storia_side_images_locales_parent_id_idx";
  DROP INDEX IF EXISTS "pau_locales_parent_id_idx";
  DROP INDEX IF EXISTS "pau_objectives_locales_parent_id_idx";
  DROP INDEX IF EXISTS "pau_side_images_locales_parent_id_idx";
  DROP INDEX IF EXISTS "site_settings_emails_locales_parent_id_idx";
  DROP INDEX IF EXISTS "site_settings_locales_parent_id_idx";
  DROP INDEX IF EXISTS "site_settings_notices_locales_parent_id_idx";
  DROP INDEX IF EXISTS "site_settings_opening_hours_locales_parent_id_idx";
  DROP INDEX IF EXISTS "siti_archeologici_gallery_locales_parent_id_idx";
  DROP INDEX IF EXISTS "siti_archeologici_locales_parent_id_idx";`)
}
