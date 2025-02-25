import  { vi, it, expect }  from 'vitest'
const mockFn = vi.fn().mockImplementation((name) => `Hello, ${name}`)

it("mocks an implementation", () => {

  expect(mockFn("Alice")).toBe("Hello, Alice")
  expect(mockFn("Bob")).toBe("Hello, Bob")

  mockFn.mockRestore()

})

