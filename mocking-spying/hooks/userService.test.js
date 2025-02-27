// userService.test.js
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import {UserService} from './userService'
import {mockDatabase} from './mockDatabase'

describe('UserService', () => {
  let userService

  // beforeEach: Set up the test by creating a fresh instance of UserService
  beforeEach(() => {
    userService = new UserService(mockDatabase)
    // Optionally, you could mock any specific behavior here.
    vi.spyOn(mockDatabase, 'findUserById')
    vi.spyOn(mockDatabase, 'insertUser')
  })


  it('should fetch a user by ID', async () => {
    // Arrange: Set up mock data and behavior
    const userId = 1
    const expectedUser = { id: 1, name: 'John Doe' }
    
    mockDatabase.findUserById.mockReturnValueOnce(expectedUser)

    // Act: Call the method under test
    const result = await userService.getUserById(userId)

    // Assert: Verify the result
    expect(result).toEqual(expectedUser)
    expect(mockDatabase.findUserById).toHaveBeenCalledWith(userId)
    expect(mockDatabase.findUserById).toHaveBeenCalledTimes(1)
  })

  it('should create a new user', async () => {
    // Arrange: Set up new user data
    const newUser = { name: 'Alice Smith' }
    const createdUser = { id: 3, name: 'Alice Smith' }

    mockDatabase.insertUser.mockReturnValueOnce(createdUser)

    // Act: Call the method under test
    const result = await userService.createUser(newUser)

    console.log(result)

    // Assert: Verify the result
    expect(result).toEqual(createdUser)
    expect(mockDatabase.insertUser).toHaveBeenCalledWith(newUser)
    expect(mockDatabase.insertUser).toHaveBeenCalledTimes(1)
  })
})