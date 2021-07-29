const MyMap = function () {
  this.collection = {};
  this.count = 0;

  this.size = function () {
    return this.count;
  };

  this.set = function (key, value) {
    this.collection[key] = value;
    this.count++;
  };

  this.get = function (key) {
    if (key in this.collection) {
      return this.collection[key];
    }
    return null;
  };

  this.values = function () {
    return this.collection;
  };

  this.has = function (key) {
    return key in this.collection;
  };

  this.delete = function (key) {
    if (key in this.collection) {
      delete this.collection[key];
      this.count--;
    }
  };

  this.clear = function () {
    this.collection = {};
    this.count = 0;
  };
};

const myMap = new MyMap();
myMap.set("a", 1);
myMap.set("b", 2);
myMap.set("c", 3);
myMap.set("d", 4);

console.log(myMap.values());
console.log(myMap.get("a"));
console.log(myMap.clear());
console.log(myMap.values());
