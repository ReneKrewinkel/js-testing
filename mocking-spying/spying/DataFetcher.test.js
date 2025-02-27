import { describe, it, expect, vi } from 'vitest'
import { DataFetcher, sum } from './DataFetcher'

describe('DataFetcher', () => {
    it('should call fetchData once', () => {
        const fetcher = new DataFetcher()

        // Spy on fetchData method
        const spy = vi.spyOn(fetcher, 'fetchData')

        fetcher.fetchData() // Call the method

        // Assert that fetchData was called once
        expect(spy).toHaveBeenCalledTimes(1)
    })


    it('should return mocked data', () => {
        const fetcher = new DataFetcher()
        
        // Spy on fetchData method and mock its return value
        vi.spyOn(fetcher, 'fetchData').mockReturnValue('Mocked Data')
        
        // Call the method
        const result = fetcher.fetchData()
        
        // Assert that the mocked data is returned
        expect(result).toBe('Mocked Data')
    })
})

describe('sum function spy', () => {
    it('should spy on a function call', () => {
        // Arrange: Create a spy function
        const spy = vi.fn(sum)
    
        // Act: Call the spy function
        const result = spy(2, 3)
    
        // Assert: Ensure the spy was called and returned the expected value
        expect(spy).toHaveBeenCalled() // Check if it was called
        expect(spy).toHaveBeenCalledTimes(1) // Check call count
        expect(spy).toHaveBeenCalledWith(2, 3) // Check arguments
        expect(result).toBe(5) // Check return value
      })
})