// Function that returns a promise
export const delayedPromise = (value, delay = 0, shouldReject = false) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldReject) {
                reject(new Error('Promise rejected'))
            } else {
                resolve(value)
            }
        }, delay)
    })
}
