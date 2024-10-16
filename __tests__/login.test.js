import { login } from '../src/js/api/auth/login.js'
import { createMockFetch } from '../mocks/fetch.mock.js'
import { userData, authResponse } from '../mocks/user.mock.js'
import localStorageMock from '../mocks/localStorage.mock.js'

describe('login', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should store the profile in localStorage without the accessToken', async () => {
    global.fetch = createMockFetch(authResponse, 200)
    global.localStorage = localStorageMock

    const profile = await login(userData.email, userData.password)

    expect(profile).toBe(authResponse)
  })

  it('should login and store the token in localStorage', async () => {
    global.fetch = createMockFetch(userData, 200)
    global.localStorage = localStorageMock

    const token = 'tokenTest'

    const profile = await login(userData.email, userData.password)

    expect(localStorage.getItem('token')).toBe(JSON.stringify(token))
    expect(profile).toEqual(authResponse)
    expect(profile.accessToken).toBeUndefined()
  })

  it('should throw an error if the response is not 200', async () => {
    global.fetch = createMockFetch(userData, 400)

    await expect(login(userData.email, userData.password)).rejects.toThrow()
  })
})
