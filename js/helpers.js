export function isNumber(c) {
    return c >= '0' && c <= '9';
}

export function isSymbol(c) {
    return c == '×' || c == '+' || c == '÷' || c == '-' || c == '.';
}

// Normalize graphic operators and simplify consecutive symbols
function normalizeExpression(expression) {
    return expression
        .replace(/×/g, '*')    // Replace '×' with '*'
        .replace(/÷/g, '/')    // Replace '÷' with '/'
        .replace(/\+\++/g, '+') // Replace múltiples '+' with uno solo
        .replace(/--/g, '+')   // Replace '--' with '+'
        .replace(/-\+/g, '-')  // Replace '-+' with '-'
        .replace(/\+-/g, '-'); // Replace '+-' with '-'
}

// Tokenize the expression in numbers and operators
function tokenize(expression) {
    expression = normalizeExpression(expression);
    const tokens = [];
    let numberBuffer = "";

    for (let char of expression) {
        if (/\d|\./.test(char)) {  // Allow digits and decimals
            numberBuffer += char;
        } else {
            if (numberBuffer) {
                if (numberBuffer.split('.').length > 2) {  // More than a single decimal point
                    throw new Error("Invalid decimal number");
                }
                tokens.push(parseFloat(numberBuffer));  // Converts to decimal number
                numberBuffer = "";
            }
            tokens.push(char);
        }
    }

    if (numberBuffer) {
        if (numberBuffer.split('.').length > 2) {
            throw new Error("Invalid decimal number");
        }
        tokens.push(parseFloat(numberBuffer));
    }

    return tokens;
}


class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function parseExpression(tokens) {
    const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };

    function buildTree(start, end) {
        if (start > end) return null;  // Avoids infinite recursion
        if (start === end) return new TreeNode(tokens[start]);

        let minPrecedence = Infinity;
        let mainOpIndex = -1;

        for (let i = start; i <= end; i++) {
            if (typeof tokens[i] !== "number" && precedence[tokens[i]] <= minPrecedence) {
                minPrecedence = precedence[tokens[i]];
                mainOpIndex = i;
            }
        }

        if (mainOpIndex === -1) {
            throw new Error("Invalid Expression");
        }

        return new TreeNode(
            tokens[mainOpIndex],
            buildTree(start, mainOpIndex - 1),
            buildTree(mainOpIndex + 1, end)
        );
    }

    return buildTree(0, tokens.length - 1);
}

function evaluateTree(node) {
    if (!node) return 0;
    if (typeof node.value === "number") return node.value;

    const left = evaluateTree(node.left);
    const right = evaluateTree(node.right);

    switch (node.value) {
        case '+': return left + right;
        case '-': return left - right;
        case '*': return left * right;
        case '/': 
            if (right === 0) throw new Error("Division by zero");
            return left / right;
        default:
            throw new Error("Uknown operator: " + node.value);
    }
}

export { normalizeExpression, tokenize, parseExpression, evaluateTree };
