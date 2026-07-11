interface User {
  id: number;
  username: string;
  country: string;
}

interface Moderator {
  role: string | number;
}

interface Admin extends User,Moderator {
  protect?: boolean;
}

let user: Admin = {
  id: 100,
  username: "Aymane",
  country: "Morocco",
  role: "Mod",
  protect: true
}

console.log(user.id);