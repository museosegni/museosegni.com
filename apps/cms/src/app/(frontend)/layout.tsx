import React from 'react'

export const metadata = {
  title: 'Museo di Segni — CMS',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}
