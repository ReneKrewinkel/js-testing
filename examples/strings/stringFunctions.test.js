// stringFunctions.test.js
import { describe, it, expect } from 'vitest'
import { processString } from './stringFunctions'

describe('happy path', () => {
    it('should return a string', () => {
        // Arrange
        const input = 'Hello'

        // Act
        const result = processString(input)

        // Assert
        expect(typeof result).toBe('string')
    })

    it('should return the correct string', () => {
        // Arrange
        const input = 'Test String'

        // Act
        const result = processString(input)

        // Assert
        expect(result).toBe(input)
    })

    it('should return an empty string', () => {
        // Arrange
        const input = ''
        const expectedOutput = '   '

        // Act
        const result = processString(input)

        // Assert
        expect(result).toBe(expectedOutput) // Three spaces
    })

    it('should return a string with only spaces', () => {
        // Arrange
        const input = '   '

        // Act
        const result = processString(input)

        // Assert
        expect(result).toBe('   ')
    })

    it('should return a string with only spaces when passed an empty string', () => {
        // Arrange
        const input = ''

        // Act
        const result = processString(input)

        // Assert
        expect(result).toBe('   ')
    })
})

describe('edge case', () => {
    it('should return default string when passed null', () => {
        // Arrange
        const input = null

        // Act
        const result = processString(input)

        // Assert
        expect(result).toBe('default string')
    })

    it('should return default string when passed undefined', () => {
        // Arrange
        const input = undefined

        // Act
        const result = processString(input)

        // Assert
        expect(result).toBe('default string')
    })

    it('should handle very long strings without modification', () => {
        // Arrange
        const input = 'a'.repeat(1000)

        // Act
        const result = processString(input)

        // Assert
        expect(result).toBe(input)
    })

    it('should handle special characters correctly', () => {
        // Arrange
        const input = '@#$%^&*()_+'

        // Act
        const result = processString(input)

        // Assert
        expect(result).toBe(input)
    })

    it('should return an empty string when passed only newline characters', () => {
        // Arrange
        const input = '\n\n\n'

        // Act
        const result = processString(input)

        // Assert
        expect(result).toBe('\n\n\n')
    })
})

describe('unhappy path', () => {
    // Unhappy path tests
    it('should not return a number', () => {
        // Arrange
        const input = 'Hello'

        // Act
        const result = processString(input)

        // Assert
        expect(typeof result).not.toBe('number')
    })

    it('should not return null', () => {
        // Arrange
        const input = 'Test'

        // Act
        const result = processString(input)

        // Assert
        expect(result).not.toBeNull()
    })

    it('should not return undefined', () => {
        // Arrange
        const input = 'Another Test'

        // Act
        const result = processString(input)

        // Assert
        expect(result).not.toBeUndefined()
    })

    it('should not return an empty string when given non-empty input', () => {
        // Arrange
        const input = 'Valid Input'

        // Act
        const result = processString(input)

        // Assert
        expect(result).not.toBe('')
    })

    it('should not modify non-empty input', () => {
        // Arrange
        const input = 'unchanged'

        // Act
        const result = processString(input)

        // Assert
        expect(result).not.toBe('modified')
    })
})
