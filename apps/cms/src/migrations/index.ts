import * as migration_20260721_084542_initial from './20260721_084542_initial';

export const migrations = [
  {
    up: migration_20260721_084542_initial.up,
    down: migration_20260721_084542_initial.down,
    name: '20260721_084542_initial'
  },
];
