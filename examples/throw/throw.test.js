import { describe, expect, it } from 'vitest'
import { throwError } from './throw'

// 1. Test a function that throws an error
it('should throw an error', () => {
    // Arrange & Act & Assert
    expect(() => throwError('general')).toThrow()
})

// 2. Test a function that throws an error with a specific message
it('should throw an error with a specific message', () => {
    // Arrange
    const condition = 'specific'

    // Act & Assert
    expect(() => throwError(condition)).toThrowError(new Error('This is a specific error message'))
})

// 3. Test a function that throws an error with a specific message using `toThrow`
it('should throw an error with a specific message using toThrow', () => {
    // Arrange
    const condition = 'specific'

    // Act & Assert
    expect(() => throwError(condition)).toThrow('This is a specific error message')
})
