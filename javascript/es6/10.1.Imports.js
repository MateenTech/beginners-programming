import { add, product, quotient } from './10.Exports.js';

/* 
    When the export is default you can name that export default function any name 
    when you are import in another file,

    In this case we default exported subtract function and here we import that
    default function with name (difference);
*/
import difference from "./10.Exports.js";


console.log(add(2, 2));

console.log(difference(10, 3));

console.log(product(10, 2));

console.log(quotient(4, 2))

