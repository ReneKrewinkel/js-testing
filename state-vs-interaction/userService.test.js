import { fetchUserDetails } from './userService.js'
import { getUserData } from './api.js'
import { vi, it, expect } from 'vitest'

// Mock the API module
vi.mock('./api.js', () => ({
    getUserData: vi.fn() // Mock function
}))

it('should return user info when API call succeeds', async () => {
    // Mock the API response
    getUserData.mockResolvedValue({ name: 'Alice', email: 'alice@example.com' })

    const result = await fetchUserDetails(1)

    expect(result).toBe('User: Alice, Email: alice@example.com')
    expect(getUserData).toHaveBeenCalledWith(1) // Ensure API was called with userId=1
})

it('should handle API errors gracefully', async () => {
    // Mock the API to reject with an error
    getUserData.mockRejectedValue(new Error('User not found'))

    const result = await fetchUserDetails(999)

    expect(result).toBe('Error fetching user details')
    expect(getUserData).toHaveBeenCalledWith(999)
})
