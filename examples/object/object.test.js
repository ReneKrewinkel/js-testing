import { describe, expect, it } from 'vitest'
import { getUser } from './object'

describe('getUser', () => {
  
  it('should return an object', () => {
    // Arrange & Act
    const result = getUser()

    // Assert
    expect(typeof result).toBe('object')
    expect(result).not.toBeNull()
  })

  it('should return an object with the correct properties', () => {
    // Arrange & Act
    const result = getUser()

    // Assert
    expect(result).toEqual({
      id: 1,
      name: 'Alice',
      age: 25,
      role:'admin',
      address: {
        city: 'Amsterdam',
        country: 'NL'
      }
    })
  })


  it('should have specific properties using toHaveProperty', () => {
    // Arrange & Act
    const result = getUser()

    if(result.role === 'admin') {
      // Assert
      expect(result).toHaveProperty('id')
      expect(result).toHaveProperty('name')
      expect(result).toHaveProperty('age')
      expect(result).toHaveProperty('address.city')
      expect(result).toHaveProperty('address.country')
    }
  })

  it('should have specific properties with correct values using toHaveProperty and toEqual', () => {
    // Arrange & Act
    const result = getUser()

    // Assert
    expect(result).toHaveProperty('name', 'Alice')
    expect(result).toHaveProperty('age', 25)
    expect(result).toHaveProperty('address', { city: 'Amsterdam', country: 'NL' })
  })

})
