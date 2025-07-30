# Exposing custom environment variables 🛠

You might only want to expose a subset of the variables prefixed with `NEXT_PUBLIC_` to the browser. In this case you can use the `whitelist` prop.

#### NOTE: this technique only allows you to expose a _subset_ of things that start with `NEXT_PUBLIC_`, you can't expose things that don't start with `NEXT_PUBLIC_`. This is by design, and different than the original `next-runtime-env` package.

### Example

```tsx
// app/layout.tsx
import { PublicEnvScript } from '@ryankshaw/next-runtime-env';

process.env = {
  NEXT_PUBLIC_FOO: 'foo',
  NEXT_PUBLIC_BAR: 'bar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {}
        <PublicEnvScript
          // only NEXT_PUBLIC_FOO will be available to client-side code
          whitelist={['NEXT_PUBLIC_FOO']}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```
