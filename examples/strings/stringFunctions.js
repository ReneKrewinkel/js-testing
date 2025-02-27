export const processString = (input) => {
    if (input === '') return ' '.repeat(3) // Returns a string with spaces
    return input || 'default string'
}
