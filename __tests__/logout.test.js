import { logout } from '../src/js/api/auth/logout.js'
import localStorageMock from '../mocks/localStorage.mock.js'
import { userData, authResponse } from '../mocks/user.mock.js'

describe('logout', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    global.localStorage = localStorageMock
  })

  it('should remove the token from localStorage', () => {
    localStorage.setItem('token', userData.accessToken)

    logout()

    expect(localStorage.getItem('token')).toBeNull()
  })

  it('should remove the profile from localStorage', () => {
    localStorage.setItem('profile', authResponse)

    logout()

    expect(localStorage.getItem('profile')).toBeNull()
  })

  it('should call remove() twice', () => {
    localStorage.setItem('token', userData.accessToken)
    localStorage.setItem('profile', authResponse)

    logout()

    expect(localStorage.removeItem).toHaveBeenCalledTimes(2)
  })
})
