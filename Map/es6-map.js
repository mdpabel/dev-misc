const map = new Map();

const obj = { a: 2 };
const func = function () {
  console.log("TEST");
};
const arr = [];

map.set("a", 1);
map.set(obj, 2);
map.set(func, 3);
map.set(arr, 3);
map.set(NaN, 5);

console.log("values ", map.values());
console.log("size ", map.size);
console.log("keys ", map.keys());
console.log("has ", map.has(NaN));
console.log("get ", map.get(func));
console.log(
  "forEach ",
  map.forEach((i) => console.log(i))
);
console.log("entires ", map.entries());
console.log("delete ", map.delete("a"));
console.log("clear ", map.clear());
