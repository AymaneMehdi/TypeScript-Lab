"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    id: 100,
    username: "Aymane",
    country: "Morocco",
    sayHello() {
        return `Hello ${this.username}`;
    },
    sayWelcome: () => {
        return `Welcome ${user.username}`;
    },
    getDouble(n) {
        return n * 2;
    }
};
console.log(user.id);
console.log(user.sayHello());
console.log(user.sayWelcome());
console.log(user.getDouble(100));
//# sourceMappingURL=Interface-Method-And-Parameters.js.map