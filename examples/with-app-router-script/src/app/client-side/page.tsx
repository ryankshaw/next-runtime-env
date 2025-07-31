'use client'

import { env } from '@ryankshaw/next-runtime-env'

export default function ClientSide() {
  return (
    <div>
      <h1>Client Side</h1>
      <ul>
        <li>NEXT_PUBLIC_FOO: {env('NEXT_PUBLIC_FOO')}</li>
        <li>NEXT_PUBLIC_BAZ: {env('NEXT_PUBLIC_BAZ')}</li>
        <li>This won't work: env('BAR')</li>
        <li>
          accessing process.env.NEXT_PUBLIC_BAZ directly will be what it was at
          build time: {process.env.NEXT_PUBLIC_BAZ}
        </li>
        <li>
          And you can NOT access process.env.BAR directly with process.env:{' '}
          {process.env.BAR}
        </li>
      </ul>
    </div>
  )
}
