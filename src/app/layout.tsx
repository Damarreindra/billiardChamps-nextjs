// app/layout.tsx
import AuthStateChangeprovider from './lib/context/auth'
import { UserProvider } from './lib/context/user'
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
        <Providers>
          <UserProvider>
          <AuthStateChangeprovider/>
          {children}
          </UserProvider>
          </Providers>
      </body>
    </html>
  )
}