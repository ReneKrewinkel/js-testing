export function add(numbers) {
    let sum = 0

    for (const number of numbers) {
        sum += +number
    }
    return sum
}

export function subtract(numbers) {
    let result = numbers[0]

    for (let i = 1; i < numbers.length; i++) {
        result -= numbers[i]
    }
    return result
}
