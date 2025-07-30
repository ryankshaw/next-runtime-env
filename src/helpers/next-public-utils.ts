export type NEXT_PUBLIC_string = `NEXT_PUBLIC_${string}`;
export type PublicEnv = Record<NEXT_PUBLIC_string, string | undefined>;

export function startsWithNextPublic(key: string): key is NEXT_PUBLIC_string {
  return key.startsWith('NEXT_PUBLIC_');
}
