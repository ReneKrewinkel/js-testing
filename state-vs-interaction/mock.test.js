import { vi, it, expect } from 'vitest'
import { getUserData } from './api.js'

vi.mock('./api', () => ({
    getUserData: vi.fn(() => Promise.resolve('mock data'))
}))

it('executed a mocking API call', async () => {
    const data = await getUserData()
    expect(data).toBe('mock data') // Uses mocked response
    expect(getUserData).toHaveBeenCalled()
})
