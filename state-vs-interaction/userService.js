// userService.js
import { getUserData } from "./api.js"

export const fetchUserDetails = async (userId) => {
  try {
    const user = await getUserData(userId)
    return `User: ${user.name}, Email: ${user.email}`
  } catch (error) {
    return "Error fetching user details"
  }
}