"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    id: 100,
    username: "Aymane",
    country: "Morocco"
};
user.country = "Morocco";
console.log(user);
function getData(data) {
    console.log(`Id Is ${data.id}`);
    console.log(`Username Is ${data.username}`);
    console.log(`Country Is ${data.country}`);
}
getData({ id: 200, username: "Aymane", country: "Morocco" });
//# sourceMappingURL=Interface-Declaration.js.map