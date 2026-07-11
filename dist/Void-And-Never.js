"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logging(msg) {
    console.log(msg);
    return;
}
console.log(logging("Message"));
console.log("Test");
const fail = (msg) => {
    throw new Error(msg);
};
function alwaysLog(name) {
    while (true) {
        console.log(name);
    }
}
alwaysLog("Aymane");
//# sourceMappingURL=Void-And-Never.js.map