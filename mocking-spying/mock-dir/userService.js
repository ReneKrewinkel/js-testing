// userService.js
export class UserService {
    async getUserById(id) {
      try {
        const response = await fetch(`https://api.example.com/users/${id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch user')
        }
        const data = await response.json()
        return data
      } catch (error) {
        throw new Error('Failed to fetch user')
      }
    }
  }
  