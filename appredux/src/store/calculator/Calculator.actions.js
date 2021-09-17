export function sum (a, b) {
    return {
        type: 'SUM',
        payload: [a, b]
    }
}

export function subtract (a, b) {
    return {
        type: 'SUBTRACT',
        payload: [a, b]
    }
}

export function multiply (a, b) {
    return {
        type: 'MULTIPLY',
        payload: [a, b]
    }
}