export function isNumber(c) {
    return c >= '0' && c <= '9';
}

export function isOperationSign(c) {
    return c == '×' || c == '+' || c == '÷' || c == '-';
}