import { env } from '@ryankshaw/next-runtime-env'

export async function GET() {
  return Response.json({
    NEXT_PUBLIC_BAR: env('NEXT_PUBLIC_BAR'), // This is the same as process.env.NEXT_PUBLIC_BAR
    baz: process.env.BAZ,
  })
}
