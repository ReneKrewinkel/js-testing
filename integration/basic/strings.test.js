import { describe, it, expect } from 'vitest'
import { trimString, capitalizeString, processFullString } from './strings'

describe('String processing functions', () => {
    describe('trimString', () => {
        it('should remove leading and trailing spaces', () => {
            expect(trimString('  hello  ')).toBe('hello')
        })
    })

    describe('capitalizeString', () => {
        it('should capitalize the first letter and lowercase the rest', () => {
            expect(capitalizeString('hELLO')).toBe('Hello')
        })
    })

    describe('processFullString', () => {
        it('should trim and capitalize a string correctly', () => {
            expect(processFullString('  hello world  ')).toBe('Hello world')
        })

        it('should handle an already formatted string correctly', () => {
            expect(processFullString('Hello world')).toBe('Hello world')
        })

        it('should handle a string with only spaces', () => {
            expect(processFullString('   ')).toBe('')
        })
    })
})
