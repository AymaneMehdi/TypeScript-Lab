function showData1(name?: string, age?: number, country?: string) {
  return `${name} - ${age} - ${country}`;
}

console.log(showData1("Aymane", 27, "Morocco"));

function showData2(name: string = "Aymane", age?: number, country?: string) {
  return `${name} - ${age} - ${country}`;
}

console.log(showData2(undefined, 27, "Morocco"));