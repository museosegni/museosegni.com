import * as migration_20260721_084542_initial from './20260721_084542_initial';
import * as migration_20260722_000000_home_quote from './20260722_000000_home_quote';
import * as migration_20260722_010000_site_settings_emails_notices from './20260722_010000_site_settings_emails_notices';
import * as migration_20261021_000000_remove_how_to_arrive from './20261021_000000_remove_how_to_arrive';
import * as migration_20261022_000000_payload_3_91 from './20261022_000000_payload_3_91';

export const migrations = [
  {
    up: migration_20260721_084542_initial.up,
    down: migration_20260721_084542_initial.down,
    name: '20260721_084542_initial'
  },
  {
    up: migration_20260722_000000_home_quote.up,
    down: migration_20260722_000000_home_quote.down,
    name: '20260722_000000_home_quote'
  },
  {
    up: migration_20260722_010000_site_settings_emails_notices.up,
    down: migration_20260722_010000_site_settings_emails_notices.down,
    name: '20260722_010000_site_settings_emails_notices'
  },
  {
    up: migration_20261021_000000_remove_how_to_arrive.up,
    down: migration_20261021_000000_remove_how_to_arrive.down,
    name: '20261021_000000_remove_how_to_arrive'
  },
  {
    up: migration_20261022_000000_payload_3_91.up,
    down: migration_20261022_000000_payload_3_91.down,
    name: '20261022_000000_payload_3_91'
  },
];
