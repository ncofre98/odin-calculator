import { tokenize, parseExpression, evaluateTree } from './helpers.js';

function calculate(expression) {
    const tokens = tokenize(expression);  // Convert string to tokens
    const tree = parseExpression(tokens); // Build tree
    return evaluateTree(tree);
}

export { calculate };