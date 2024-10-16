export default {
  setItem: jest.fn((key, value) => {
    localStorage[key] = value
  }),
  getItem: jest.fn((key) => {
    return localStorage[key] || null
  }),
  removeItem: jest.fn((key) => {
    delete localStorage[key]
  }),
  clear: jest.fn(() => {
    Object.keys(localStorage).forEach((key) => delete localStorage[key])
  }),
}
