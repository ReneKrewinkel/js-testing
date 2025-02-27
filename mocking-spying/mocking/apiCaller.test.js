// apiCaller.test.js
import { describe, it, expect, vi } from 'vitest'
import { fetchData } from './apiCaller' // Import the main function
import * as apiModule from './fetchDataFromAPI' // Import the API module to mock

describe('fetchData', () => {
  it('should return data when API call is successful', async () => {
    // Arrange: Set up the mock to simulate a successful API response
    const mockData = { id: 1, name: 'Test' }
    const resultData = { id: 1, name: 'Test', description: 'Hello' }
    
    vi.spyOn(apiModule, 'fetchDataFromAPI').mockResolvedValue(mockData)

    // Act: Call the function that triggers the API call
    const result = await fetchData()

    // Assert: Check that the result is as expected
    expect(result).toEqual(resultData)
    expect(apiModule.fetchDataFromAPI).toHaveBeenCalled()
  })

  it('should throw an error when API call fails', async () => {
    // Arrange: Set up the mock to simulate an API failure
    vi.spyOn(apiModule, 'fetchDataFromAPI').mockRejectedValue(new Error('Failed to fetch data'))
    // Act & Assert: Call the function and expect an error
    await expect(fetchData()).rejects.toThrow('Failed to fetch data')
    expect(apiModule.fetchDataFromAPI).toHaveBeenCalled()
  })
})