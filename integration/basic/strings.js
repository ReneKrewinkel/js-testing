export const trimString = (str) => {
    return str.trim()
}

export const capitalizeString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export const processFullString = (str) => {
    const trimmed = trimString(str)
    return capitalizeString(trimmed)
}
