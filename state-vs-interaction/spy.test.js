import  { vi, it, expect }  from 'vitest'

const user = {
  getName: () => "Alice",
}

it("spies on getName method", () => {
  const spy = vi.spyOn(user, "getName")

  user.getName() // Call the function

  expect(spy).toHaveBeenCalled() // Verify it was called
  expect(spy).toHaveReturnedWith("Alice") // Check return value

  spy.mockRestore() // Restore original function (important!)
})