import { isBrowser } from '../helpers/is-browser.js';
import {
  startsWithNextPublic,
  type NEXT_PUBLIC_string,
} from '../helpers/next-public-utils.js';
import { PUBLIC_ENV_KEY } from './constants.js';

/**
 * Reads a safe environment variable (from `window.__ENV` in the browser or `process.env` on the server).
 *
 * @param key - The environment variable key to read. Must start with 'NEXT_PUBLIC_'
 * @returns The environment variable value or undefined if not found.
 * @throws An error if the environment variable doesn't start with 'NEXT_PUBLIC_'
 * @example const API_URL = env('NEXT_PUBLIC_API_URL')
 */
export function env(key: NEXT_PUBLIC_string): string | undefined {
  if (!startsWithNextPublic(key)) {
    throw new Error(
      `Environment variable '${key}' is not public and cannot be accessed using next-runtime-env`,
    );
  }
  if (isBrowser()) return window[PUBLIC_ENV_KEY]?.[key];
  return process.env[key];
}
