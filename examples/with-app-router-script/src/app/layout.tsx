import { PublicEnvScript } from '@ryankshaw/next-runtime-env'
import Link from 'next/link'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <PublicEnvScript />
      </head>
      <body>
        <nav>
          <ul>
            <li>
              <Link href="/client-side">Client Side</Link>
            </li>
            <li>
              <Link href="/server-side">Server Side</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
