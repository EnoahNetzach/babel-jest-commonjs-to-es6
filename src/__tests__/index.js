const fn = require('..')

describe('simple test', () => {
  test('exports a function', () => {
    expect(typeof fn).toBe('function')
  })

  test('undefined if false', () => {
    expect(fn()).toBeUndefined()
  })

  test('42 if true', () => {
    expect(fn(true)).toBe(42)
  })
})
