// Testo dei suggerimenti di dimensione mostrati nell'admin per i campi immagine.
// Le stesse dimensioni sono definite in Media.ts (PRESETS) e usate dal frontend
// in apps/web/components/SiteImage.tsx per il placeholder finché l'immagine non
// è caricata: qui replichiamo l'informazione anche lato admin, dove il
// placeholder col-le dimensioni non è visibile.
export const HERO_16_9 = 'Formato 16:9 — dimensione consigliata 1920 x 1080px.'
export const CARD_4_3 = 'Formato 4:3 — dimensione consigliata 1200 x 900px.'
export const SQUARE_1_1 = 'Formato quadrato — dimensione consigliata 1080 x 1080px.'
export const BANNER_21_9 = 'Formato panoramico 21:9 — dimensione consigliata 2100 x 900px.'
export const GALLERY_MIXED = `${CARD_4_3} La terza immagine della galleria viene invece mostrata in formato quadrato (1080 x 1080px).`
