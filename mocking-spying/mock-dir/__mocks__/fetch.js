import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

// __mocks__/fetch.js
export const mockFetch = vi.fn((url) => {
    if (url === 'https://api.example.com/users/1') {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ id: 1, name: 'John Doe' }),
      })
    } else {
      return Promise.reject(new Error('User not found'))
    }
  })