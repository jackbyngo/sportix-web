import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SPORTIX | Інтернет-магазин спортивного одягу — Львів',
  description: 'Кросплатформний інтернет-магазин спортивного одягу. Власник — Варварич Роман Миколайович. Офіс у Львові, 3 роки досвіду.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
