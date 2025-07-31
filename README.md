# This is a fork of [https://github.com/expatfile/next-runtime-env]

Available on NPM as `@ryankshaw/next-runtime-env`

## Why the fork?

- to make it work with next 15 (as of Aug 2025, there is a [PR to do so but it has not had any activity since March](https://github.com/expatfile/next-runtime-env/pull/164))
- to make it as simple as possible

# 🌐 Next.js Runtime Environment Configuration

**Effortlessly populate your environment at runtime, not just at build time**

🌟 **Highlights:**
- **Isomorphic Design:** Works seamlessly on both server and browser, and even in middleware.
- **Next.js 15 Ready:** Fully compatible with the latest Next.js features.
- **`.env` Friendly:** Use `.env` files during development, just like standard Next.js.

### 🤔 Why is this needed?

In the modern software development landscape, the "[Build once, deploy many][build-once-deploy-many-link]" philosophy is key. This principle, essential for easy deployment and testability, is a [cornerstone of continuous delivery][fundamental-principle-link] and is embraced by the [twelve-factor methodology][twelve-factor-link]. However, front-end development, particularly with Next.js, often lacks support for this - requiring separate builds for different environments. `next-runtime-env` is our solution to bridge this gap in Next.js.

### 📦 Introduction

`next-runtime-env` dynamically injects environment variables into your Next.js application at runtime. This approach adheres to the "build once, deploy many" principle, allowing the same build to be used across various environments without rebuilds.

### 🤝 Compatibility Notes

This fork works with Next 15. For older versions of Next, use https://github.com/expatfile/next-runtime-env

### 🚀 Getting Started

In your `app/layout.tsx`, add:

```js
// app/layout.tsx
import { PublicEnvScript } from '@ryankshaw/next-runtime-env'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <PublicEnvScript />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
```

The `PublicEnvScript` component automatically exposes all environment variables prefixed with `NEXT_PUBLIC_` to the browser. For custom variable exposure, refer to [EXPOSING_CUSTOM_ENV.md](docs/EXPOSING_CUSTOM_ENV.md).

### 🧑‍💻 Usage

Access your environment variables easily:

```tsx
// app/client-page.tsx
'use client'
import { env } from '@ryankshaw/next-runtime-env'

export default function SomePage() {
  const NEXT_PUBLIC_FOO = env('NEXT_PUBLIC_FOO')
  return <main>NEXT_PUBLIC_FOO: {NEXT_PUBLIC_FOO}</main>
}
```

### 📚 Acknowledgments

Huge kudos to Kudos to [Zino Hofmann](https://github.com/HofmannZ) and [Expatfile.tax](expatfile-site) for making `next-runtime-env`!.

Kudos to the [react-env](react-env-repo) project for the inspiration, and a shoutout to @andonirdgz for the innovative context provider idea!

---

[build-url]: https://img.shields.io/github/checks-status/expatfile/next-runtime-env/main
[cov-img]: https://codecov.io/gh/expatfile/next-runtime-env/branch/main/graph/badge.svg?token=mbGgsweFuP
[cov-url]: https://codecov.io/gh/expatfile/next-runtime-env
[snyk-img]: https://snyk.io/test/github/expatfile/next-runtime-env/badge.svg
[snyk-url]: https://snyk.io/test/github/expatfile/next-runtime-env
[nextjs-env-vars-order]: https://nextjs.org/docs/basic-features/environment-variables#environment-variable-load-order
[build-once-deploy-many-link]: https://www.mikemcgarr.com/blog/build-once-deploy-many.html
[fundamental-principle-link]: https://cloud.redhat.com/blog/build-once-deploy-anywhere
[twelve-factor-link]: https://12factor.net
[pages-router-branch-link]: https://github.com/expatfile/next-runtime-env/tree/1.x
[app-router-branch-link]: https://github.com/expatfile/next-runtime-env/tree/2.x
[nextjs-env-vars]: https://nextjs.org/docs/basic-features/environment-variables
[react-env-repo]: https://github.com/andrewmclagan/react-env
[expatfile-site]: https://expatfile.tax
