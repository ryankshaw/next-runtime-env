# Getting started 🚀

1. First, install the package into your project:

```bash
npm install @ryankshaw/next-runtime-env
```

1. Then add the script to your head in the root layout:

```tsx
// src/app/layout.tsx
import { PublicEnvScript } from '@ryankshaw/next-runtime-env';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <PublicEnvScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

1. Finally, use `env` utility to access the runtime environment variables any where in your app:

```tsx
import { env } from '@ryankshaw/next-runtime-env';

export function MyComponent() {
  const NEXT_PUBLIC_FOO = env('NEXT_PUBLIC_FOO');
  const NEXT_PUBLIC_BAZ = env('NEXT_PUBLIC_BAZ');

  useEffect(() => {
    // some api call using NEXT_PUBLIC_BAZ
  }, [NEXT_PUBLIC_BAZ]);

  return <div>{NEXT_PUBLIC_FOO}</div>;
}
```

That's it! You can now use the @ryankshaw/next-runtime-env package to access runtime environment variables in your Next.js app.
