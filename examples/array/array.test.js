import { describe, expect, it } from 'vitest'
import { getArray, getUsers } from './array'

describe('getArray', () => {
    it('should return an array', () => {
        // Arrange & Act
        const result = getArray()

        // Assert
        expect(Array.isArray(result)).toBe(true)
    })

    it('should return an array with the correct length', () => {
        // Arrange & Act
        const result = getArray()

        // Assert
        expect(result).toHaveLength(3)
    })

    it('should return an array with the correct elements', () => {
        // Arrange & Act
        const result = getArray()

        // Assert
        expect(result).toEqual([1, 2, { id: 3, name: 'Alice' }])
    })

    it('should contain a specific element using toContain', () => {
        // Arrange & Act
        const result = getArray()

        // Assert
        expect(result).toContain(1)
        expect(result).toContain(2)
    })

    it('should contain a specific object using toContainEqual', () => {
        // Arrange & Act
        const result = getArray()

        // Assert
        expect(result).toContainEqual({ id: 3, name: 'Alice' })
    })
})


describe('getUsers', () => {
    it('should return an array', () => {
        // Arrange & Act
        const result = getUsers()

        // Assert
        expect(Array.isArray(result)).toBe(true)
    })

    it('should return an array with the correct length', () => {
        // Arrange & Act
        const result = getUsers()

        // Assert
        expect(result).toHaveLength(3)
    })

    it('should return an array with the correct user objects', () => {
        // Arrange & Act
        const result = getUsers()

        // Assert
        expect(result).toEqual([
            { id: 1, name: 'Alice', age: 25 },
            { id: 2, name: 'Bob', age: 30 },
            { id: 3, name: 'Charlie', age: 35 }
        ])
    })

    it('should contain a specific user object using toContain', () => {
        // Arrange & Act
        const result = getUsers()

        // Assert
        expect(result).toContain(result[0]) // Checking if Alice exists
    })

    it('should contain a specific user object using toContainEqual', () => {
        // Arrange & Act
        const result = getUsers()

        // Assert
        expect(result).toContainEqual({ id: 2, name: 'Bob', age: 30 })
    })
})
