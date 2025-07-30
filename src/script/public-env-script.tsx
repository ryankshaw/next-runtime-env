import { connection } from 'next/server.js';
import { PUBLIC_ENV_KEY } from './constants.js';
import {
  startsWithNextPublic,
  type NEXT_PUBLIC_string,
  type PublicEnv,
} from '../helpers/next-public-utils.js';

// This allows TypeScript to detect our global value.
declare global {
  interface Window {
    __ENV: PublicEnv;
  }
}

/**
 * Sets the public environment variables in the browser. Forwards any other props (like `nonce`) on to the <script> tag.
 *
 * This component is disables Next.js' caching mechanism to ensure that the
 * environment variables are always up-to-date.
 *
 * Usage:
 * ```ts
 * <head>
 *   <PublicEnvScript />
 * </head>
 * ```
 */
export async function PublicEnvScript({
  whitelist,
  ...otherProps
}: React.ComponentProps<'script'> & {
  whitelist?: NEXT_PUBLIC_string[];
}) {
  await connection(); // Makes sure this is dynamically rendered at runtime

  // This will be evaluated at runtime
  const publicEnv = Object.fromEntries(
    Object.entries(process.env).filter(
      ([key]) =>
        startsWithNextPublic(key) && (!whitelist || whitelist.includes(key)),
    ),
  );

  return (
    <script
      {...otherProps}
      dangerouslySetInnerHTML={{
        __html: `window['${PUBLIC_ENV_KEY}'] = ${JSON.stringify(publicEnv)}`,
      }}
    />
  );
}
