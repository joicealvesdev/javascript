export function hoje () {
    return new Date().toLocaleDateString ('pt-br');
}

export function hora () {
    return new Date().toLocaleTimeString('pt-br');
}