"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myObject = {
    username: "Aymane",
    id: 100,
    hire: true,
    skills: {
        one: "HTML",
        two: "CSS"
    }
};
myObject.id = 101;
myObject.hire = false;
console.log(myObject.username);
console.log(myObject.id);
console.log(myObject.hire);
console.log(myObject.skills.one);
//# sourceMappingURL=Type-Annotations-With-Object.js.map