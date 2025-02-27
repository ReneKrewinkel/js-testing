// mainFunction.test.js
import { describe, it, expect, vi } from 'vitest'
import { mainFunction } from './mainFunction'
import * as helperFunctions from './helperFunctions'

describe('mainFunction', () => {
  it('should return combined results when all helper functions succeed', async () => {
    // Arrange: Mock the helper functions to return specific values
    const mockResultOne = { name: 'Mocked Function One', status: 'Mocked Success' }
    const mockResultTwo = { name: 'Mocked Function Two', status: 'Mocked Success' }
    const mockResultThree = { name: 'Mocked Function Three', status: 'Mocked Success' }
    
    vi.spyOn(helperFunctions, 'functionOne').mockResolvedValue(mockResultOne)
    vi.spyOn(helperFunctions, 'functionTwo').mockResolvedValue(mockResultTwo)
    vi.spyOn(helperFunctions, 'functionThree').mockResolvedValue(mockResultThree)

    // Act: Call the main function
    const result = await mainFunction()

    // Assert: Verify that the combined results are correct
    expect(result).toEqual({
      resultOne: mockResultOne,
      resultTwo: mockResultTwo,
      resultThree: mockResultThree,
    })

    expect(helperFunctions.functionOne).toHaveBeenCalled()
    expect(helperFunctions.functionTwo).toHaveBeenCalled()
    expect(helperFunctions.functionThree).toHaveBeenCalled()
  })

  
  it('should throw an error if any helper function fails', async () => {
    // Arrange: Mock the helper functions to simulate an error in one of them
    const mockResultOne = { name: 'Mocked Function One', status: 'Mocked Success' }
    vi.spyOn(helperFunctions, 'functionOne').mockResolvedValue(mockResultOne)
    vi.spyOn(helperFunctions, 'functionTwo').mockRejectedValue(new Error('Error in function two'))
    vi.spyOn(helperFunctions, 'functionThree').mockResolvedValue({ name: 'Mocked Function Three', status: 'Mocked Success' })

    // Act & Assert: Call the main function and expect an error
    await expect(mainFunction()).rejects.toThrow('Something went wrong in the main function')

    expect(helperFunctions.functionOne).toHaveBeenCalled()
    expect(helperFunctions.functionTwo).toHaveBeenCalled()
    expect(helperFunctions.functionThree).not.toHaveBeenCalled()
  })

  it('should return default values when all helper functions return empty results', async () => {
    // Arrange: Mock the helper functions to return empty objects
    vi.spyOn(helperFunctions, 'functionOne').mockResolvedValue({})
    vi.spyOn(helperFunctions, 'functionTwo').mockResolvedValue({})
    vi.spyOn(helperFunctions, 'functionThree').mockResolvedValue({})

    // Act: Call the main function
    const result = await mainFunction()

    // Assert: Verify the result is empty for all function calls
    expect(result).toEqual({
      resultOne: {},
      resultTwo: {},
      resultThree: {},
    })

    expect(helperFunctions.functionOne).toHaveBeenCalled()
    expect(helperFunctions.functionTwo).toHaveBeenCalled()
    expect(helperFunctions.functionThree).toHaveBeenCalled()
  })
  
})