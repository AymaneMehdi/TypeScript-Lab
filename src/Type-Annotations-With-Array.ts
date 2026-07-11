let all: string | number | boolean = "Aymane";

all = "A";
all = 100;
all = true;

let myFriends: string[] = ["Aymane", "Mehdi", "Woldraz"];

for (let i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i]!.repeat(3));
}
