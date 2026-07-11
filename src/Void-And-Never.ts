function logging(msg: string) : void {
  console.log(msg);
  return;
}

console.log(logging("Message"));
console.log("Test");

const fail = (msg: string) => {
  throw new Error(msg);
  // return 10;
}

function alwaysLog(name: string) : never {
  while(true) {
    console.log(name);
  }
}

alwaysLog("Aymane");
// console.log("Test");