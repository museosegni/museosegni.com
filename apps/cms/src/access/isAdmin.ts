import type { Access, FieldAccess } from 'payload'

/** Solo utenti con ruolo "admin" (i.e. non "editor"). */
export const isAdmin: Access = ({ req }) => req.user?.roles === 'admin'
export const isAdminField: FieldAccess = ({ req }) => req.user?.roles === 'admin'

/**
 * Gli admin vedono/modificano tutti gli utenti; un editor vede/modifica solo
 * se stesso (niente elenco degli altri account, niente escalation di ruolo —
 * quella è bloccata a livello di campo, vedi `roles.access.update`).
 */
export const isAdminOrSelf: Access = ({ req }) => {
  if (!req.user) return false
  if (req.user.roles === 'admin') return true
  return { id: { equals: req.user.id } }
}
