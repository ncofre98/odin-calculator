export function isNumber(c) {
    return c >= '0' && c <= '9';
}

export function isOperationSign(c) {
    return c == '×' || c == '+' || c == '÷' || c == '-';
}

function simplifyOperators(expression) {
    return expression
        .replace(/\+\++/g, '+')  // Replace múltiples '+' with just one
        .replace(/--/g, '+')      // Replace '--' with '+'
        .replace(/-\+/g, '-')     // Replace '-+' with '-'
        .replace(/\+-/g, '-');    // Replace '+-' with '-'
}

function infixToPostfix(infixExpression) {
    
}
