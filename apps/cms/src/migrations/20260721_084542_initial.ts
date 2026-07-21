import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('it', 'en');
  CREATE TYPE "public"."enum_users_roles" AS ENUM('admin', 'editor');
  CREATE TYPE "public"."enum_museo_servizi_services_icon" AS ENUM('BookOpen', 'Archive', 'GraduationCap', 'Camera', 'Wifi', 'Accessibility');
  CREATE TYPE "public"."enum_site_settings_how_to_arrive_mode" AS ENUM('car', 'train');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"roles" "enum_users_roles" DEFAULT 'editor' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_hero_16_9_avif_url" varchar,
  	"sizes_hero_16_9_avif_width" numeric,
  	"sizes_hero_16_9_avif_height" numeric,
  	"sizes_hero_16_9_avif_mime_type" varchar,
  	"sizes_hero_16_9_avif_filesize" numeric,
  	"sizes_hero_16_9_avif_filename" varchar,
  	"sizes_hero_16_9_webp_url" varchar,
  	"sizes_hero_16_9_webp_width" numeric,
  	"sizes_hero_16_9_webp_height" numeric,
  	"sizes_hero_16_9_webp_mime_type" varchar,
  	"sizes_hero_16_9_webp_filesize" numeric,
  	"sizes_hero_16_9_webp_filename" varchar,
  	"sizes_card_4_3_avif_url" varchar,
  	"sizes_card_4_3_avif_width" numeric,
  	"sizes_card_4_3_avif_height" numeric,
  	"sizes_card_4_3_avif_mime_type" varchar,
  	"sizes_card_4_3_avif_filesize" numeric,
  	"sizes_card_4_3_avif_filename" varchar,
  	"sizes_card_4_3_webp_url" varchar,
  	"sizes_card_4_3_webp_width" numeric,
  	"sizes_card_4_3_webp_height" numeric,
  	"sizes_card_4_3_webp_mime_type" varchar,
  	"sizes_card_4_3_webp_filesize" numeric,
  	"sizes_card_4_3_webp_filename" varchar,
  	"sizes_square_1_1_avif_url" varchar,
  	"sizes_square_1_1_avif_width" numeric,
  	"sizes_square_1_1_avif_height" numeric,
  	"sizes_square_1_1_avif_mime_type" varchar,
  	"sizes_square_1_1_avif_filesize" numeric,
  	"sizes_square_1_1_avif_filename" varchar,
  	"sizes_square_1_1_webp_url" varchar,
  	"sizes_square_1_1_webp_width" numeric,
  	"sizes_square_1_1_webp_height" numeric,
  	"sizes_square_1_1_webp_mime_type" varchar,
  	"sizes_square_1_1_webp_filesize" numeric,
  	"sizes_square_1_1_webp_filename" varchar,
  	"sizes_banner_21_9_avif_url" varchar,
  	"sizes_banner_21_9_avif_width" numeric,
  	"sizes_banner_21_9_avif_height" numeric,
  	"sizes_banner_21_9_avif_mime_type" varchar,
  	"sizes_banner_21_9_avif_filesize" numeric,
  	"sizes_banner_21_9_avif_filename" varchar,
  	"sizes_banner_21_9_webp_url" varchar,
  	"sizes_banner_21_9_webp_width" numeric,
  	"sizes_banner_21_9_webp_height" numeric,
  	"sizes_banner_21_9_webp_mime_type" varchar,
  	"sizes_banner_21_9_webp_filesize" numeric,
  	"sizes_banner_21_9_webp_filename" varchar
  );
  
  CREATE TABLE "siti_archeologici_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "siti_archeologici_gallery_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "siti_archeologici" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"hero_image_id" integer,
  	"ordine" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "siti_archeologici_locales" (
  	"title" varchar NOT NULL,
  	"subtitle" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "chiese_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "chiese_gallery_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "chiese" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"hero_image_id" integer,
  	"ordine" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "chiese_locales" (
  	"title" varchar NOT NULL,
  	"subtitle" varchar,
  	"description" varchar,
  	"history" varchar,
  	"features" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "edifici_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "edifici_gallery_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "edifici" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"hero_image_id" integer,
  	"ordine" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "edifici_locales" (
  	"title" varchar NOT NULL,
  	"subtitle" varchar,
  	"description" varchar,
  	"history" varchar,
  	"architecture" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "collezioni_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"dating" varchar,
  	"bibliography" varchar
  );
  
  CREATE TABLE "collezioni_items_locales" (
  	"name" varchar NOT NULL,
  	"description" varchar,
  	"object" varchar,
  	"provenance" varchar,
  	"room" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "collezioni" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"hero_image_id" integer,
  	"ordine" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "collezioni_locales" (
  	"title" varchar NOT NULL,
  	"subtitle" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"siti_archeologici_id" integer,
  	"chiese_id" integer,
  	"edifici_id" integer,
  	"collezioni_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "home_featured_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "home_featured_cards_locales" (
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "home_news_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"date" varchar
  );
  
  CREATE TABLE "home_news_items_locales" (
  	"title" varchar NOT NULL,
  	"excerpt" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "home" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "home_locales" (
  	"hero_title" varchar DEFAULT 'Museo Archeologico',
  	"hero_title_accent" varchar DEFAULT 'Comunale di Segni',
  	"hero_subtitle" varchar,
  	"hero_cta_label" varchar DEFAULT 'Esplora gli itinerari',
  	"intro_title" varchar DEFAULT 'Scopri il Museo',
  	"intro_text" varchar,
  	"news_section_title" varchar DEFAULT 'News e Eventi',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "museo" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "museo_locales" (
  	"hero_title" varchar DEFAULT 'Il Museo Archeologico',
  	"hero_subtitle" varchar,
  	"intro" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "museo_storia_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "museo_storia_sections_locales" (
  	"heading" varchar NOT NULL,
  	"body" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "museo_storia_side_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "museo_storia_side_images_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "museo_storia_sale" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "museo_storia_sale_locales" (
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "museo_storia" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "museo_sede_fact_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "museo_sede_fact_cards_locales" (
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "museo_sede" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"exterior_image_id" integer,
  	"interior_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "museo_sede_locales" (
  	"subtitle" varchar DEFAULT 'Palazzo della Comunità: un gioiello del XIII secolo nel cuore di Segni',
  	"heading" varchar DEFAULT 'Il Palazzo della Comunità',
  	"body" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "museo_servizi_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_museo_servizi_services_icon" NOT NULL
  );
  
  CREATE TABLE "museo_servizi_services_locales" (
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "museo_servizi" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "museo_servizi_locales" (
  	"research_section_title" varchar DEFAULT 'Servizio per ricercatori',
  	"research_text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "museo_libreria_books" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"author" varchar,
  	"price" varchar
  );
  
  CREATE TABLE "museo_libreria_books_locales" (
  	"title" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "museo_libreria_merchandise" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"price" varchar
  );
  
  CREATE TABLE "museo_libreria_merchandise_locales" (
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "museo_libreria" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "museo_contatti" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "museo_contatti_locales" (
  	"subtitle" varchar DEFAULT 'Informazioni pratiche per pianificare la tua visita',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "pau_objectives" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "pau_objectives_locales" (
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pau_side_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer
  );
  
  CREATE TABLE "pau_side_images_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pau" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "pau_locales" (
  	"hero_title" varchar DEFAULT 'PAU',
  	"hero_title_accent" varchar DEFAULT 'Segni Città-Museo',
  	"hero_subtitle" varchar,
  	"intro_heading" varchar DEFAULT 'Il concetto di museo diffuso',
  	"intro_text" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "site_settings_opening_hours" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"hours" varchar,
  	"closed" boolean DEFAULT false
  );
  
  CREATE TABLE "site_settings_opening_hours_locales" (
  	"days" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
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
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"address" varchar DEFAULT 'Via Lauri 1, 00037 Segni (RM)',
  	"phone" varchar DEFAULT '+39 069 72 600 72',
  	"email" varchar DEFAULT 'museo@comune.segni.rm.it',
  	"regolamento_pdf_id" integer,
  	"carta_servizi_pdf_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "site_settings_locales" (
  	"holiday_note" varchar DEFAULT 'Chiuso il 25 dicembre, 1 gennaio e 1 maggio. Orari speciali durante le festività.',
  	"ticket_price" varchar DEFAULT 'Gratuito',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "siti_archeologici_gallery" ADD CONSTRAINT "siti_archeologici_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "siti_archeologici_gallery" ADD CONSTRAINT "siti_archeologici_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."siti_archeologici"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "siti_archeologici_gallery_locales" ADD CONSTRAINT "siti_archeologici_gallery_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."siti_archeologici_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "siti_archeologici" ADD CONSTRAINT "siti_archeologici_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "siti_archeologici_locales" ADD CONSTRAINT "siti_archeologici_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."siti_archeologici"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "chiese_gallery" ADD CONSTRAINT "chiese_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "chiese_gallery" ADD CONSTRAINT "chiese_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."chiese"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "chiese_gallery_locales" ADD CONSTRAINT "chiese_gallery_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."chiese_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "chiese" ADD CONSTRAINT "chiese_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "chiese_locales" ADD CONSTRAINT "chiese_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."chiese"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edifici_gallery" ADD CONSTRAINT "edifici_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "edifici_gallery" ADD CONSTRAINT "edifici_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edifici"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edifici_gallery_locales" ADD CONSTRAINT "edifici_gallery_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edifici_gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "edifici" ADD CONSTRAINT "edifici_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "edifici_locales" ADD CONSTRAINT "edifici_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."edifici"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "collezioni_items" ADD CONSTRAINT "collezioni_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "collezioni_items" ADD CONSTRAINT "collezioni_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."collezioni"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "collezioni_items_locales" ADD CONSTRAINT "collezioni_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."collezioni_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "collezioni" ADD CONSTRAINT "collezioni_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "collezioni_locales" ADD CONSTRAINT "collezioni_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."collezioni"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_siti_archeologici_fk" FOREIGN KEY ("siti_archeologici_id") REFERENCES "public"."siti_archeologici"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_chiese_fk" FOREIGN KEY ("chiese_id") REFERENCES "public"."chiese"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_edifici_fk" FOREIGN KEY ("edifici_id") REFERENCES "public"."edifici"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_collezioni_fk" FOREIGN KEY ("collezioni_id") REFERENCES "public"."collezioni"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_featured_cards" ADD CONSTRAINT "home_featured_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_featured_cards" ADD CONSTRAINT "home_featured_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_featured_cards_locales" ADD CONSTRAINT "home_featured_cards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_featured_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_news_items" ADD CONSTRAINT "home_news_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_news_items_locales" ADD CONSTRAINT "home_news_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_news_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home" ADD CONSTRAINT "home_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_locales" ADD CONSTRAINT "home_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "museo" ADD CONSTRAINT "museo_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "museo_locales" ADD CONSTRAINT "museo_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."museo"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "museo_storia_sections" ADD CONSTRAINT "museo_storia_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."museo_storia"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "museo_storia_sections_locales" ADD CONSTRAINT "museo_storia_sections_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."museo_storia_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "museo_storia_side_images" ADD CONSTRAINT "museo_storia_side_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "museo_storia_side_images" ADD CONSTRAINT "museo_storia_side_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."museo_storia"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "museo_storia_side_images_locales" ADD CONSTRAINT "museo_storia_side_images_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."museo_storia_side_images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "museo_storia_sale" ADD CONSTRAINT "museo_storia_sale_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."museo_storia"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "museo_storia_sale_locales" ADD CONSTRAINT "museo_storia_sale_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."museo_storia_sale"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "museo_storia" ADD CONSTRAINT "museo_storia_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "museo_sede_fact_cards" ADD CONSTRAINT "museo_sede_fact_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."museo_sede"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "museo_sede_fact_cards_locales" ADD CONSTRAINT "museo_sede_fact_cards_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."museo_sede_fact_cards"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "museo_sede" ADD CONSTRAINT "museo_sede_exterior_image_id_media_id_fk" FOREIGN KEY ("exterior_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "museo_sede" ADD CONSTRAINT "museo_sede_interior_image_id_media_id_fk" FOREIGN KEY ("interior_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "museo_sede_locales" ADD CONSTRAINT "museo_sede_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."museo_sede"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "museo_servizi_services" ADD CONSTRAINT "museo_servizi_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."museo_servizi"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "museo_servizi_services_locales" ADD CONSTRAINT "museo_servizi_services_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."museo_servizi_services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "museo_servizi" ADD CONSTRAINT "museo_servizi_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "museo_servizi_locales" ADD CONSTRAINT "museo_servizi_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."museo_servizi"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "museo_libreria_books" ADD CONSTRAINT "museo_libreria_books_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."museo_libreria"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "museo_libreria_books_locales" ADD CONSTRAINT "museo_libreria_books_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."museo_libreria_books"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "museo_libreria_merchandise" ADD CONSTRAINT "museo_libreria_merchandise_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."museo_libreria"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "museo_libreria_merchandise_locales" ADD CONSTRAINT "museo_libreria_merchandise_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."museo_libreria_merchandise"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "museo_libreria" ADD CONSTRAINT "museo_libreria_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "museo_contatti_locales" ADD CONSTRAINT "museo_contatti_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."museo_contatti"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pau_objectives" ADD CONSTRAINT "pau_objectives_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pau"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pau_objectives_locales" ADD CONSTRAINT "pau_objectives_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pau_objectives"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pau_side_images" ADD CONSTRAINT "pau_side_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pau_side_images" ADD CONSTRAINT "pau_side_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pau"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pau_side_images_locales" ADD CONSTRAINT "pau_side_images_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pau_side_images"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pau" ADD CONSTRAINT "pau_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pau_locales" ADD CONSTRAINT "pau_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pau"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_opening_hours" ADD CONSTRAINT "site_settings_opening_hours_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_opening_hours_locales" ADD CONSTRAINT "site_settings_opening_hours_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings_opening_hours"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_how_to_arrive" ADD CONSTRAINT "site_settings_how_to_arrive_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_how_to_arrive_locales" ADD CONSTRAINT "site_settings_how_to_arrive_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings_how_to_arrive"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_regolamento_pdf_id_media_id_fk" FOREIGN KEY ("regolamento_pdf_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_carta_servizi_pdf_id_media_id_fk" FOREIGN KEY ("carta_servizi_pdf_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "site_settings_locales" ADD CONSTRAINT "site_settings_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_hero_16_9_avif_sizes_hero_16_9_avif_filename_idx" ON "media" USING btree ("sizes_hero_16_9_avif_filename");
  CREATE INDEX "media_sizes_hero_16_9_webp_sizes_hero_16_9_webp_filename_idx" ON "media" USING btree ("sizes_hero_16_9_webp_filename");
  CREATE INDEX "media_sizes_card_4_3_avif_sizes_card_4_3_avif_filename_idx" ON "media" USING btree ("sizes_card_4_3_avif_filename");
  CREATE INDEX "media_sizes_card_4_3_webp_sizes_card_4_3_webp_filename_idx" ON "media" USING btree ("sizes_card_4_3_webp_filename");
  CREATE INDEX "media_sizes_square_1_1_avif_sizes_square_1_1_avif_filena_idx" ON "media" USING btree ("sizes_square_1_1_avif_filename");
  CREATE INDEX "media_sizes_square_1_1_webp_sizes_square_1_1_webp_filena_idx" ON "media" USING btree ("sizes_square_1_1_webp_filename");
  CREATE INDEX "media_sizes_banner_21_9_avif_sizes_banner_21_9_avif_file_idx" ON "media" USING btree ("sizes_banner_21_9_avif_filename");
  CREATE INDEX "media_sizes_banner_21_9_webp_sizes_banner_21_9_webp_file_idx" ON "media" USING btree ("sizes_banner_21_9_webp_filename");
  CREATE INDEX "siti_archeologici_gallery_order_idx" ON "siti_archeologici_gallery" USING btree ("_order");
  CREATE INDEX "siti_archeologici_gallery_parent_id_idx" ON "siti_archeologici_gallery" USING btree ("_parent_id");
  CREATE INDEX "siti_archeologici_gallery_image_idx" ON "siti_archeologici_gallery" USING btree ("image_id");
  CREATE UNIQUE INDEX "siti_archeologici_gallery_locales_locale_parent_id_unique" ON "siti_archeologici_gallery_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "siti_archeologici_slug_idx" ON "siti_archeologici" USING btree ("slug");
  CREATE INDEX "siti_archeologici_hero_image_idx" ON "siti_archeologici" USING btree ("hero_image_id");
  CREATE INDEX "siti_archeologici_updated_at_idx" ON "siti_archeologici" USING btree ("updated_at");
  CREATE INDEX "siti_archeologici_created_at_idx" ON "siti_archeologici" USING btree ("created_at");
  CREATE UNIQUE INDEX "siti_archeologici_locales_locale_parent_id_unique" ON "siti_archeologici_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "chiese_gallery_order_idx" ON "chiese_gallery" USING btree ("_order");
  CREATE INDEX "chiese_gallery_parent_id_idx" ON "chiese_gallery" USING btree ("_parent_id");
  CREATE INDEX "chiese_gallery_image_idx" ON "chiese_gallery" USING btree ("image_id");
  CREATE UNIQUE INDEX "chiese_gallery_locales_locale_parent_id_unique" ON "chiese_gallery_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "chiese_slug_idx" ON "chiese" USING btree ("slug");
  CREATE INDEX "chiese_hero_image_idx" ON "chiese" USING btree ("hero_image_id");
  CREATE INDEX "chiese_updated_at_idx" ON "chiese" USING btree ("updated_at");
  CREATE INDEX "chiese_created_at_idx" ON "chiese" USING btree ("created_at");
  CREATE UNIQUE INDEX "chiese_locales_locale_parent_id_unique" ON "chiese_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "edifici_gallery_order_idx" ON "edifici_gallery" USING btree ("_order");
  CREATE INDEX "edifici_gallery_parent_id_idx" ON "edifici_gallery" USING btree ("_parent_id");
  CREATE INDEX "edifici_gallery_image_idx" ON "edifici_gallery" USING btree ("image_id");
  CREATE UNIQUE INDEX "edifici_gallery_locales_locale_parent_id_unique" ON "edifici_gallery_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "edifici_slug_idx" ON "edifici" USING btree ("slug");
  CREATE INDEX "edifici_hero_image_idx" ON "edifici" USING btree ("hero_image_id");
  CREATE INDEX "edifici_updated_at_idx" ON "edifici" USING btree ("updated_at");
  CREATE INDEX "edifici_created_at_idx" ON "edifici" USING btree ("created_at");
  CREATE UNIQUE INDEX "edifici_locales_locale_parent_id_unique" ON "edifici_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "collezioni_items_order_idx" ON "collezioni_items" USING btree ("_order");
  CREATE INDEX "collezioni_items_parent_id_idx" ON "collezioni_items" USING btree ("_parent_id");
  CREATE INDEX "collezioni_items_image_idx" ON "collezioni_items" USING btree ("image_id");
  CREATE UNIQUE INDEX "collezioni_items_locales_locale_parent_id_unique" ON "collezioni_items_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "collezioni_slug_idx" ON "collezioni" USING btree ("slug");
  CREATE INDEX "collezioni_hero_image_idx" ON "collezioni" USING btree ("hero_image_id");
  CREATE INDEX "collezioni_updated_at_idx" ON "collezioni" USING btree ("updated_at");
  CREATE INDEX "collezioni_created_at_idx" ON "collezioni" USING btree ("created_at");
  CREATE UNIQUE INDEX "collezioni_locales_locale_parent_id_unique" ON "collezioni_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_siti_archeologici_id_idx" ON "payload_locked_documents_rels" USING btree ("siti_archeologici_id");
  CREATE INDEX "payload_locked_documents_rels_chiese_id_idx" ON "payload_locked_documents_rels" USING btree ("chiese_id");
  CREATE INDEX "payload_locked_documents_rels_edifici_id_idx" ON "payload_locked_documents_rels" USING btree ("edifici_id");
  CREATE INDEX "payload_locked_documents_rels_collezioni_id_idx" ON "payload_locked_documents_rels" USING btree ("collezioni_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "home_featured_cards_order_idx" ON "home_featured_cards" USING btree ("_order");
  CREATE INDEX "home_featured_cards_parent_id_idx" ON "home_featured_cards" USING btree ("_parent_id");
  CREATE INDEX "home_featured_cards_image_idx" ON "home_featured_cards" USING btree ("image_id");
  CREATE UNIQUE INDEX "home_featured_cards_locales_locale_parent_id_unique" ON "home_featured_cards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "home_news_items_order_idx" ON "home_news_items" USING btree ("_order");
  CREATE INDEX "home_news_items_parent_id_idx" ON "home_news_items" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "home_news_items_locales_locale_parent_id_unique" ON "home_news_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "home_hero_image_idx" ON "home" USING btree ("hero_image_id");
  CREATE UNIQUE INDEX "home_locales_locale_parent_id_unique" ON "home_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "museo_hero_image_idx" ON "museo" USING btree ("hero_image_id");
  CREATE UNIQUE INDEX "museo_locales_locale_parent_id_unique" ON "museo_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "museo_storia_sections_order_idx" ON "museo_storia_sections" USING btree ("_order");
  CREATE INDEX "museo_storia_sections_parent_id_idx" ON "museo_storia_sections" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "museo_storia_sections_locales_locale_parent_id_unique" ON "museo_storia_sections_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "museo_storia_side_images_order_idx" ON "museo_storia_side_images" USING btree ("_order");
  CREATE INDEX "museo_storia_side_images_parent_id_idx" ON "museo_storia_side_images" USING btree ("_parent_id");
  CREATE INDEX "museo_storia_side_images_image_idx" ON "museo_storia_side_images" USING btree ("image_id");
  CREATE UNIQUE INDEX "museo_storia_side_images_locales_locale_parent_id_unique" ON "museo_storia_side_images_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "museo_storia_sale_order_idx" ON "museo_storia_sale" USING btree ("_order");
  CREATE INDEX "museo_storia_sale_parent_id_idx" ON "museo_storia_sale" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "museo_storia_sale_locales_locale_parent_id_unique" ON "museo_storia_sale_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "museo_storia_hero_image_idx" ON "museo_storia" USING btree ("hero_image_id");
  CREATE INDEX "museo_sede_fact_cards_order_idx" ON "museo_sede_fact_cards" USING btree ("_order");
  CREATE INDEX "museo_sede_fact_cards_parent_id_idx" ON "museo_sede_fact_cards" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "museo_sede_fact_cards_locales_locale_parent_id_unique" ON "museo_sede_fact_cards_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "museo_sede_exterior_image_idx" ON "museo_sede" USING btree ("exterior_image_id");
  CREATE INDEX "museo_sede_interior_image_idx" ON "museo_sede" USING btree ("interior_image_id");
  CREATE UNIQUE INDEX "museo_sede_locales_locale_parent_id_unique" ON "museo_sede_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "museo_servizi_services_order_idx" ON "museo_servizi_services" USING btree ("_order");
  CREATE INDEX "museo_servizi_services_parent_id_idx" ON "museo_servizi_services" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "museo_servizi_services_locales_locale_parent_id_unique" ON "museo_servizi_services_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "museo_servizi_hero_image_idx" ON "museo_servizi" USING btree ("hero_image_id");
  CREATE UNIQUE INDEX "museo_servizi_locales_locale_parent_id_unique" ON "museo_servizi_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "museo_libreria_books_order_idx" ON "museo_libreria_books" USING btree ("_order");
  CREATE INDEX "museo_libreria_books_parent_id_idx" ON "museo_libreria_books" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "museo_libreria_books_locales_locale_parent_id_unique" ON "museo_libreria_books_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "museo_libreria_merchandise_order_idx" ON "museo_libreria_merchandise" USING btree ("_order");
  CREATE INDEX "museo_libreria_merchandise_parent_id_idx" ON "museo_libreria_merchandise" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "museo_libreria_merchandise_locales_locale_parent_id_unique" ON "museo_libreria_merchandise_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "museo_libreria_hero_image_idx" ON "museo_libreria" USING btree ("hero_image_id");
  CREATE UNIQUE INDEX "museo_contatti_locales_locale_parent_id_unique" ON "museo_contatti_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pau_objectives_order_idx" ON "pau_objectives" USING btree ("_order");
  CREATE INDEX "pau_objectives_parent_id_idx" ON "pau_objectives" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "pau_objectives_locales_locale_parent_id_unique" ON "pau_objectives_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pau_side_images_order_idx" ON "pau_side_images" USING btree ("_order");
  CREATE INDEX "pau_side_images_parent_id_idx" ON "pau_side_images" USING btree ("_parent_id");
  CREATE INDEX "pau_side_images_image_idx" ON "pau_side_images" USING btree ("image_id");
  CREATE UNIQUE INDEX "pau_side_images_locales_locale_parent_id_unique" ON "pau_side_images_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pau_hero_image_idx" ON "pau" USING btree ("hero_image_id");
  CREATE UNIQUE INDEX "pau_locales_locale_parent_id_unique" ON "pau_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "site_settings_opening_hours_order_idx" ON "site_settings_opening_hours" USING btree ("_order");
  CREATE INDEX "site_settings_opening_hours_parent_id_idx" ON "site_settings_opening_hours" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "site_settings_opening_hours_locales_locale_parent_id_unique" ON "site_settings_opening_hours_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "site_settings_how_to_arrive_order_idx" ON "site_settings_how_to_arrive" USING btree ("_order");
  CREATE INDEX "site_settings_how_to_arrive_parent_id_idx" ON "site_settings_how_to_arrive" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "site_settings_how_to_arrive_locales_locale_parent_id_unique" ON "site_settings_how_to_arrive_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "site_settings_regolamento_pdf_idx" ON "site_settings" USING btree ("regolamento_pdf_id");
  CREATE INDEX "site_settings_carta_servizi_pdf_idx" ON "site_settings" USING btree ("carta_servizi_pdf_id");
  CREATE UNIQUE INDEX "site_settings_locales_locale_parent_id_unique" ON "site_settings_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "siti_archeologici_gallery" CASCADE;
  DROP TABLE "siti_archeologici_gallery_locales" CASCADE;
  DROP TABLE "siti_archeologici" CASCADE;
  DROP TABLE "siti_archeologici_locales" CASCADE;
  DROP TABLE "chiese_gallery" CASCADE;
  DROP TABLE "chiese_gallery_locales" CASCADE;
  DROP TABLE "chiese" CASCADE;
  DROP TABLE "chiese_locales" CASCADE;
  DROP TABLE "edifici_gallery" CASCADE;
  DROP TABLE "edifici_gallery_locales" CASCADE;
  DROP TABLE "edifici" CASCADE;
  DROP TABLE "edifici_locales" CASCADE;
  DROP TABLE "collezioni_items" CASCADE;
  DROP TABLE "collezioni_items_locales" CASCADE;
  DROP TABLE "collezioni" CASCADE;
  DROP TABLE "collezioni_locales" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "home_featured_cards" CASCADE;
  DROP TABLE "home_featured_cards_locales" CASCADE;
  DROP TABLE "home_news_items" CASCADE;
  DROP TABLE "home_news_items_locales" CASCADE;
  DROP TABLE "home" CASCADE;
  DROP TABLE "home_locales" CASCADE;
  DROP TABLE "museo" CASCADE;
  DROP TABLE "museo_locales" CASCADE;
  DROP TABLE "museo_storia_sections" CASCADE;
  DROP TABLE "museo_storia_sections_locales" CASCADE;
  DROP TABLE "museo_storia_side_images" CASCADE;
  DROP TABLE "museo_storia_side_images_locales" CASCADE;
  DROP TABLE "museo_storia_sale" CASCADE;
  DROP TABLE "museo_storia_sale_locales" CASCADE;
  DROP TABLE "museo_storia" CASCADE;
  DROP TABLE "museo_sede_fact_cards" CASCADE;
  DROP TABLE "museo_sede_fact_cards_locales" CASCADE;
  DROP TABLE "museo_sede" CASCADE;
  DROP TABLE "museo_sede_locales" CASCADE;
  DROP TABLE "museo_servizi_services" CASCADE;
  DROP TABLE "museo_servizi_services_locales" CASCADE;
  DROP TABLE "museo_servizi" CASCADE;
  DROP TABLE "museo_servizi_locales" CASCADE;
  DROP TABLE "museo_libreria_books" CASCADE;
  DROP TABLE "museo_libreria_books_locales" CASCADE;
  DROP TABLE "museo_libreria_merchandise" CASCADE;
  DROP TABLE "museo_libreria_merchandise_locales" CASCADE;
  DROP TABLE "museo_libreria" CASCADE;
  DROP TABLE "museo_contatti" CASCADE;
  DROP TABLE "museo_contatti_locales" CASCADE;
  DROP TABLE "pau_objectives" CASCADE;
  DROP TABLE "pau_objectives_locales" CASCADE;
  DROP TABLE "pau_side_images" CASCADE;
  DROP TABLE "pau_side_images_locales" CASCADE;
  DROP TABLE "pau" CASCADE;
  DROP TABLE "pau_locales" CASCADE;
  DROP TABLE "site_settings_opening_hours" CASCADE;
  DROP TABLE "site_settings_opening_hours_locales" CASCADE;
  DROP TABLE "site_settings_how_to_arrive" CASCADE;
  DROP TABLE "site_settings_how_to_arrive_locales" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TABLE "site_settings_locales" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_users_roles";
  DROP TYPE "public"."enum_museo_servizi_services_icon";
  DROP TYPE "public"."enum_site_settings_how_to_arrive_mode";`)
}
