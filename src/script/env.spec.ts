import { env } from './env.js'

describe('env()', () => {
  afterEach(() => {
    delete process.env.FOO

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    global.window = undefined as any
  })

  it('should return a value from the server', () => {
    process.env.NEXT_PUBLIC_FOO = 'foo'

    expect(env('NEXT_PUBLIC_FOO')).toEqual('foo')
  })

  it('should return a value from the browser', () => {
    Object.defineProperty(global, 'window', {
      value: {
        __ENV: {
          NEXT_PUBLIC_FOO: 'foo',
        },
      },
      writable: true,
    })

    expect(env('NEXT_PUBLIC_FOO')).toEqual('foo')
  })

  it('should return undefined when variable does not exist on the server', () => {
    expect(env('NEXT_PUBLIC_BAM_BAM')).toEqual(undefined)
  })

  it('should return undefined when variable does not exist in the browser', () => {
    Object.defineProperty(global, 'window', {
      value: {
        __ENV: {
          NEXT_PUBLIC_FOO: 'foo',
        },
      },
      writable: true,
    })

    expect(env('NEXT_PUBLIC_BAR')).toEqual(undefined)
  })

  it('should throw when trying to access a non public variable on the server', () => {
    process.env.BAM_BAM = 'foo'

    expect(() => env('BAM_BAM' as `NEXT_PUBLIC_${string}`)).toThrow(
      "Environment variable 'BAM_BAM' is not public and cannot be accessed using next-runtime-env",
    )
  })

  it('should throw when trying to access a non public variable in the browser', () => {
    Object.defineProperty(global, 'window', {
      value: {
        __ENV: {
          NEXT_PUBLIC_FOO: 'foo',
        },
      },
      writable: true,
    })

    expect(() => env('BAM_BAM' as `NEXT_PUBLIC_${string}`)).toThrow(
      "Environment variable 'BAM_BAM' is not public and cannot be accessed using next-runtime-env",
    )
  })
})
