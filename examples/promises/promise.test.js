import { describe, it, expect } from 'vitest'
import { delayedPromise } from './promise'

describe('delayedPromise function tests', () => {
    it('should return a promise', () => {
        // Arrange & Act
        const result = delayedPromise()

        // Assert
        expect(result).toBeInstanceOf(Promise)
    })

    it('should return a promise with a value', async () => {
        // Arrange
        const expectedValue = 'hello'

        // Act & Assert
        await expect(delayedPromise(expectedValue)).resolves.toBe(expectedValue)
    })

    it('should return a promise with a value and a delay', async () => {
        // Arrange
        const expectedValue = 'world'
        const delay = 2000

        // Act & Assert
        await expect(delayedPromise(expectedValue, delay)).resolves.toBe(expectedValue)
    })

    it('should return a promise with a value and a delay using async/await', async () => {
        // Arrange
        const expectedValue = 'async-await'
        const delay = 2000

        // Act
        const result = await delayedPromise(expectedValue, delay)

        // Assert
        expect(result).toBe(expectedValue)
    })

    it('should return a promise with a value and a delay using async/await and resolves', async () => {
        // Arrange
        const expectedValue = 'xxx'
        const delay = 1000

        // Act & Assert
        await expect(delayedPromise(expectedValue, delay)).resolves.toBe(expectedValue)
    })

    it('should return a promise with a value and a delay using async/await and resolves', async () => {
        // Arrange
        const expectedValue = 'yyy'
        const delay = 1000

        // Act & Assert
        await expect(delayedPromise(expectedValue, delay)).resolves.toBe(expectedValue)
    })

    it('should return a promise with a value and a delay using async/await and rejects', async () => {
        // Arrange
        const delay = 1000

        // Act & Assert
        await expect(delayedPromise(null, delay, true)).rejects.toThrow('Promise rejected')
    })
})
