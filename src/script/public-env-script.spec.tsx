import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { vi } from 'vitest'

import { PublicEnvScript } from './public-env-script.js'

vi.mock('next/script', () => ({
  default: ({ children, ...props }: React.ComponentProps<'script'>) => (
    <script {...props}>{children}</script>
  ),
}))

beforeEach(() => {
  process.env = {}
})

afterEach(() => {
  process.env = {}
})

describe('PublicEnvScript', () => {
  it('should set a public env in the script', async () => {
    process.env = {
      NEXT_PUBLIC_FOO: 'foo-value',
    }

    render(await PublicEnvScript({}))

    await waitFor(() => {
      expect(document.querySelector('script')?.textContent).toBe(
        `window['__ENV'] = {"NEXT_PUBLIC_FOO":"foo-value"}`,
      )
    })
  })

  it('should not set a private env in the script', async () => {
    process.env = {
      NEXT_PUBLIC_FOO: 'foo-value',
      BAR: 'bar-value',
    }

    render(await PublicEnvScript({}))

    await waitFor(() => {
      expect(document.querySelector('script')?.textContent).toBe(
        `window['__ENV'] = {"NEXT_PUBLIC_FOO":"foo-value"}`,
      )
    })
  })

  it('should only set public env in the script', async () => {
    process.env = {
      NEXT_PUBLIC_FOO: 'foo-value',
      BAR: 'bar-value',
    }

    render(await PublicEnvScript({}))

    await waitFor(() => {
      expect(document.querySelector('script')?.textContent).toBe(
        `window['__ENV'] = {"NEXT_PUBLIC_FOO":"foo-value"}`,
      )
    })
  })

  it("should set a nonce when it's available", async () => {
    process.env = {
      NEXT_PUBLIC_FOO: 'foo-value',
      BAR: 'bar-value',
    }

    render(await PublicEnvScript({ nonce: 'test-nonce-xyz' }))

    await waitFor(() => {
      expect(document.querySelector('script')).toHaveAttribute('nonce')
    })
  })

  it("should not set a nonce when it's not available", async () => {
    process.env = {
      NEXT_PUBLIC_FOO: 'foo-value',
      BAR: 'bar-value',
    }

    render(await PublicEnvScript({}))

    await waitFor(() => {
      expect(document.querySelector('script')).not.toHaveAttribute('nonce')
    })
  })
})
