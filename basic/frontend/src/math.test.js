import { it, expect, describe } from 'vitest'
import { add, subtract } from './math'

describe('Mathematical Operations', () => {
    describe('Add function', () => {
        it('correctly adds an array of numbers', () => {
            expect(add([1, 2])).toBe(3)
        })

        it('correctly adds an array of strings with numbers', () => {
            expect(add(['1', '2'])).toBe(3)
        })
    })

    describe('Substract function', () => {
        it('subtracts two numbers correctly', () => {
            expect(subtract([5, 3])).toBe(2)
        })

        it('subtracts two strings with numbers correctly', () => {
            expect(subtract(['5', '3'])).toBe(1)
        })
    })
})
