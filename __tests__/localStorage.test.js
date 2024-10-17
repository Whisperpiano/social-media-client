import { load, save, remove } from '../src/js/storage/index.js'
import localStorageMock from '../mocks/localStorage.mock.js'

global.localStorage = localStorageMock

describe('localStorage.setItem()', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should save an item to localStorage', () => {
    const key = 'testKey'
    const value = 'testValue'

    save(key, value)

    expect(localStorage.getItem(key)).toEqual(JSON.stringify(value))
  })

  it('should save an object to localStorage', () => {
    const key = 'testKey'
    const value = { test: 'test', test2: 'test2' }

    save(key, value)

    expect(localStorage.getItem(key)).toEqual(JSON.stringify(value))
  })

  it('should save an array to localStorage', () => {
    const key = 'testKey'
    const value = ['test', 'test2']

    save(key, value)

    expect(localStorage.getItem(key)).toEqual(JSON.stringify(value))
  })

  it('should save a number to localStorage', () => {
    const key = 'testKey'
    const value = 123

    save(key, value)

    expect(localStorage.getItem(key)).toEqual(JSON.stringify(value))
  })

  it('should overwrite an existing item in localStorage', () => {
    const key = 'testKey'
    const value = 'testValue'
    const value2 = 'testValue2'

    save(key, value)
    save(key, value2)

    expect(localStorage.getItem(key)).toEqual(JSON.stringify(value2))
  })

  it('should handle an empty key', () => {
    const key = ''
    const value = 'testValue'

    save(key, value)

    expect(localStorage.getItem(key)).toEqual(JSON.stringify(value))
  })
})

describe('localStorage.getItem()', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should load a valid string from localStorage', () => {
    const key = 'testKey'
    const value = 'testValue'

    localStorage.setItem(key, JSON.stringify(value))

    const result = load(key)

    expect(result).toEqual(value)
  })

  it('should load an object from localStorage', () => {
    const key = 'testObjectKey'
    const value = { name: 'John', age: 30 }

    localStorage.setItem(key, JSON.stringify(value))

    const result = load(key)

    expect(result).toEqual(value)
  })

  it('should return null for non-existent key', () => {
    const result = load('nonExistentKey')

    expect(result).toBeNull()
  })

  it('should return null if JSON.parse throws an error', () => {
    const key = 'invalidJson'
    localStorage.setItem(key, 'invalid_json')

    const result = load(key)

    expect(result).toBeNull()
  })
})

describe('localStorage.remove()', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should remove an item from localStorage', () => {
    const key = 'testKey'
    const value = 'testValue'

    localStorage.setItem(key, JSON.stringify(value))

    remove(key)

    expect(localStorage.getItem(key)).toBeNull()
  })

  it('should do nothing if the key does not exist', () => {
    const key = 'nonExistentKey'

    remove(key)

    expect(localStorage.getItem(key)).toBeNull()
  })

  it('should call localStorage.removeItem with the correct key', () => {
    const key = 'testKey'
    const value = 'testValue'

    localStorage.setItem(key, JSON.stringify(value))

    remove(key)

    expect(localStorage.removeItem).toHaveBeenCalledWith(key)
  })
})
