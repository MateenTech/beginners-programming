export const add = (x, y) => x + y

export default function subtract(x, y) {
    return x - y;
};

const product = (x, y) => x * y;

const quotient = (x, y) => x / y;


// multiple exports
export { product, quotient };