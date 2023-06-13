function tokenize(input) {
    if (/\/\s*0\b/g.test(input)) { throw new Error(Infinity); return }
    if (/^[\)]|[\(]$/.test(input)) { throw new Error("Invalid parenthesis"); return }
    let scanner = 0;
    const tokens = [];

    while (scanner < input.length) {
        const char = input[scanner];
        if (/[0-9]/.test(char)) {
            let digits = '';

            // Starting from the current position, check if there are more
            // digits that make up a single number and parse them all as one
            while (scanner < input.length && /[0-9\.]/.test(input[scanner])) {
                digits += input[scanner++];
            }

            const number = parseFloat(digits);

            tokens.push(number);
            continue;
        }
        else if (/[+\-/*()^]/.test(char)) {
            tokens.push(char);
            scanner++;
            continue;
        }
        else if (char === ' ') {
            scanner++;
            continue;
        }
        else throw new Error(`Invalid token ${char} at position ${scanner}`);

    }
    let openeningP = 0
    let closingP = 0;
    for (let token of tokens) {
        if (token === '(') {
            openeningP += 1
        } else if (token === ')') {
            closingP += 1
        }
    }
    if (openeningP !== closingP) { throw new Error("Invalid parenthesis"); }
    else return tokens;

}


function evaluate(rpn) {
    const stack = [];

    for (let scanner = 0; scanner < rpn.length; scanner++) {
        const token = rpn[scanner];

        if (/[+\-/*^]/.test(token)) {
            stack.push(operate(token, stack));
            continue;
        }

        //if token is a number
        stack.push(token);
    }


    return stack.pop();
}

function operate(operator, stack) {
    const a = stack.pop();
    const b = stack.pop();

    switch (operator) {
        case '+':
            return b + a;
        case '-':
            return b - a;
        case '*':
            return b * a;
        case '/':
            return b / a;
        case '^':
            return Math.pow(b, a);
        default:
            throw new Error(`Invalid operator: ${operator}`);
    }
}

function toRPN(tokens) {
    const operators = [];
    const out = [];

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        if (typeof token === 'number') {
            out.push(token);
            continue;
        }

        if (/[+\-/*<>=^]/.test(token)) {
            while (shouldUnwindOperatorStack(operators, token)) {
                out.push(operators.pop());
            }
            operators.push(token);
            continue;
        }

        if (token === '(') {
            operators.push(token);
            continue;
        }

        if (token === ')') {
            while (operators[operators.length - 1] !== '(') {
                out.push(operators.pop());
            }
            operators.pop();
            continue;
        }

        throw new Error(`Unparsed token ${token} at position ${i}`);
    }

    for (let i = operators.length - 1; i >= 0; i--) {
        out.push(operators[i]);
    }

    return out;
}

const precedence = { '*': 2, '/': 2, '+': 1, '-': 1 };

function shouldUnwindOperatorStack(operators, nextToken) {
    if (operators.length === 0) {
        return false;
    }

    const lastOperator = operators[operators.length - 1];
    return precedence[lastOperator] >= precedence[nextToken];
}
module.exports = { tokenize, toRPN, evaluate }