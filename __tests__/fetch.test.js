import { createMockFetch } from '../mocks/fetch.mock.js'

describe('fetch()', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return a JSON object', async () => {
    const response = { test: 'test' }

    global.fetch = createMockFetch(response, 200)

    const result = await fetch('/fake-url')

    const jsonResult = await result.json()

    expect(jsonResult).toEqual(response)
  })

  it('should simulate a 200 response', async () => {
    const response = { test: 'test' }

    global.fetch = createMockFetch(response, 200)

    const result = await fetch('/fake-url')

    expect(result.ok).toBe(true)
    expect(result.status).toBe(200)
  })

  it('should simulate a 400 response', async () => {
    const response = { test: 'test' }

    global.fetch = createMockFetch(response, 400)

    const result = await fetch('/fake-url')

    expect(result.ok).toBe(false)
    expect(result.status).toBe(400)
  })
})
