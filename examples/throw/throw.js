export const throwError = (condition) => {
    if (condition === 'general') {
        throw new Error('An error occurred')
    }
    if (condition === 'specific') {
        throw new Error('This is a specific error message')
    }
    throw new Error('Unknown error')
}
