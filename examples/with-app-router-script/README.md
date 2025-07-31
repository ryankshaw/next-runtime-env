## Getting Started

First, run the development server:

```bash
NEXT_PUBLIC_FOO=foo-value BAR=bar-value BAZ=baz-value npm run dev
```

Open [http://localhost:3000/client-side](http://localhost:3000/client-side) or
[http://localhost:3000/server-side](http://localhost:3000/server-side) with your
browser to see the development result.

Next, build the app without the environment variables:

```bash
npm run build
```

Finally, run the production server with the environment variables:

```bash
NEXT_PUBLIC_FOO=foo-value BAR=bar-value BAZ=baz-value npm run start
```

Open [http://localhost:3000/client-side](http://localhost:3000/client-side) or
[http://localhost:3000/server-side](http://localhost:3000/server-side) with your
browser to see the production result.
