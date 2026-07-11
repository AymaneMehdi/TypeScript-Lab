"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showData1(name, age, country) {
    return `${name} - ${age} - ${country}`;
}
console.log(showData1("Aymane", 27, "Morocco"));
function showData2(name = "Aymane", age, country) {
    return `${name} - ${age} - ${country}`;
}
console.log(showData2(undefined, 27, "Morocco"));
//# sourceMappingURL=Optional-And-Default-Parameter.js.map