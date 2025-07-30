import { env } from '@ryankshaw/next-runtime-env';

export default function ServerSide() {
  return (
    <div>
      <h1>Server Side</h1>
      <ul>
        <li>NEXT_PUBLIC_FOO: {env('NEXT_PUBLIC_FOO')}</li>
        <li>NEXT_PUBLIC_BAZ: {env('NEXT_PUBLIC_BAZ')}</li>
        <li>This won't work: env('BAR')</li>
        <li>
          accessing process.env.NEXT_PUBLIC_BAZ directly will be what it is at
          RUN time: {process.env.NEXT_PUBLIC_BAZ}
        </li>
        <li>
          And you CAN access process.env.BAR directly with process.env:{' '}
          {process.env.BAR}
        </li>
      </ul>
    </div>
  );
}
