"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let showMsg = true;
function showDetails(name, age, salary) {
    let test = 10;
    if (showMsg) {
        return `Hello ${name}, Age Is ${age}, Salary Is ${salary}, Test Variable ${test}`;
    }
    return `No Data To Show`;
}
console.log(showDetails("Aymane", 27, 5000));
//# sourceMappingURL=Type-Annotations-With-Function.js.map