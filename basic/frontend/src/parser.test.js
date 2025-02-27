import { describe, it, expect } from 'vitest'
import { extractNumbers } from './parser'

describe('extractNumbers', () => {
    it('should extract numbers from formData', () => {
        const formData = new FormData()
        formData.append('num1', '5')
        formData.append('num2', '10')

        const result = extractNumbers(formData)
        expect(result).toEqual(['5', '10'])
    })

    it('should return empty strings if formData is empty', () => {
        const formData = new FormData()

        const result = extractNumbers(formData)
        expect(result).toEqual(['', ''])
    })

    it('should handle missing num1 input', () => {
        const formData = new FormData()
        formData.append('num2', '10')

        const result = extractNumbers(formData)
        expect(result).toEqual(['', '10'])
    })

    it('should handle missing num2 input', () => {
        const formData = new FormData()
        formData.append('num1', '5')

        const result = extractNumbers(formData)
        expect(result).toEqual(['5', ''])
    })

    it('should handle non-numeric input', () => {
        const formData = new FormData()
        formData.append('num1', 'abc')
        formData.append('num2', 'xyz')

        const result = extractNumbers(formData)
        expect(result).toEqual(['abc', 'xyz'])
    })
})
