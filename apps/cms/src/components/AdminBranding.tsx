import React from 'react'

/** Sostituisce il logo Payload nella pagina di login e nell'header dell'admin. */
export function AdminLogo() {
  return (
    <span
      style={{
        fontSize: '20px',
        fontWeight: 700,
        letterSpacing: '0.08em',
        color: 'var(--theme-elevation-800)',
      }}
    >
      MUSEO DI SEGNI
    </span>
  )
}

/** Sostituisce l'icona Payload (nav collassata, tab del browser via favicon fallback). */
export function AdminIcon() {
  return (
    <span
      style={{
        fontSize: '16px',
        fontWeight: 700,
        letterSpacing: '0.02em',
        color: 'var(--theme-elevation-800)',
      }}
    >
      MS
    </span>
  )
}
