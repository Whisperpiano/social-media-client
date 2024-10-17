import { headers } from '../src/js/api/headers.js'
import * as storage from '../src/js/storage/index.js'

jest.mock('../src/js/storage/index.js', () => ({
  load: jest.fn(),
}))

describe('headers', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return headers with Content-Type and Authorization when token is in storage', () => {
    storage.load.mockReturnValue('testtoken')

    const result = headers('application/json')

    expect(result).toEqual({
      'Content-Type': 'application/json',
      Authorization: 'Bearer testtoken',
    })
  })

  it('should return headers with only Content-Type when no token is in storage', () => {
    storage.load.mockReturnValue(null)

    const result = headers('application/json')

    expect(result).toEqual({
      'Content-Type': 'application/json',
    })
  })

  it('should return headers with only Authorization when contentType is not provided but token is in storage', () => {
    storage.load.mockReturnValue('testtoken')

    const result = headers()

    expect(result).toEqual({
      Authorization: 'Bearer testtoken',
    })
  })

  it('should return an empty headers object when no contentType is provided and no token is in storage', () => {
    storage.load.mockReturnValue(null)

    const result = headers()

    expect(result).toEqual({})
  })
})
