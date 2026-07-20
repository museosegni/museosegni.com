import type { Access, FieldAccess } from 'payload'

/** Lettura pubblica (sito headless), scrittura solo per utenti autenticati nell'admin. */
export const isLoggedIn: Access = ({ req }) => Boolean(req.user)
export const isLoggedInField: FieldAccess = ({ req }) => Boolean(req.user)

export const publicReadAuthWrite = {
  read: () => true,
  create: isLoggedIn,
  update: isLoggedIn,
  delete: isLoggedIn,
}
