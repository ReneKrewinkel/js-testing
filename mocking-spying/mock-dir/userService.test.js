// userService.test.js
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import {UserService} from './userService' // Import the original UserService
// import { mockFetch } from './__mocks__/fetch' // Import the mock fetch function

// Mock the global fetch function
global.fetch = mockFetch() //vi.fn()

describe('UserService', () => {
  let userService

  // beforeEach: Set up a fresh instance of UserService before each test
  beforeEach(() => {
    userService = new UserService()
    // Reset the mock implementation before each test
    vi.clearAllMocks()
  })

  // afterEach: Clean up any mocks after each test
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should fetch a user by ID successfully', async () => {
    // Act: Call the method to fetch a user
    const user = await userService.getUserById(1)

    // Assert: Verify the response is as expected
    expect(user).toEqual({ id: 1, name: 'John Doe' })
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/users/1')
  })

  it('should handle errors gracefully when the user is not found', async () => {
    // Set the mock to simulate a failed fetch for an unknown user
    global.fetch.mockRejectedValueOnce(new Error('User not found'))

    // Act & Assert: Verify the error handling
    await expect(userService.getUserById(999)).rejects.toThrow('Failed to fetch user')
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/users/999')
  })
})