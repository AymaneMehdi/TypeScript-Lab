interface User {
  id?: number,
  readonly username: string,
  country: string
}

let user: User = {
  id: 100,
  username: "Aymane",
  country: "Morocco"
}

user.country = "Morocco";

console.log(user);

function getData(data: User) {
  console.log(`Id Is ${data.id}`);
  console.log(`Username Is ${data.username}`);
  console.log(`Country Is ${data.country}`);
}

getData({ id: 200, username: "Aymane", country: "Morocco" });