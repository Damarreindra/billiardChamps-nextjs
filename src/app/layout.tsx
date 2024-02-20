// app/layout.tsx
import { Providers } from './providers'
import { Rubik } from 'next/font/google'


const inter = Rubik({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}