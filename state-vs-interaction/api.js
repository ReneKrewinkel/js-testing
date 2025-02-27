export const getUserData = async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    if (!response.ok) {
        throw new Error('User not found')
    }
    return response.json()
}
