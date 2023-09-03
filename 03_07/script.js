const mug = {
  name: "Coffee Mug",
  volume: 30,
  contents: {
    flavor: "Caramel",
    type: "Columbian",
    temperatures: "Warm",
  },

  newContents: function (nFlavor, nType, nTemp) {
    this.contents.flavor = nFlavor;
    this.contents.type = nType;
    this.contents.temperatures = nTemp;
  },
};

console.log("Here is your mug: ", mug);

const cat = {
  name: "Athena",
  age: 2,
  breed: "Domestic Shorthair",
  size: "8 lbs",

  newCat: function (nName, nAge, nBreed, nSize) {
    this.cat.name = nName;
    this.cat.age = nAge;
    this.cat.breed = nBreed;
    this.cat.size = nSize;
  },
};

console.log("And here is your cat: ", cat);
