const cat = {
  name: "Athena",
  age: 2,
  breed: "Domestic Shorthair",
  size: "8 lbs",
  hungry: true,

  newCat: function (nName, nAge, nBreed, nSize) {
    this.cat.name = nName;
    this.cat.age = nAge;
    this.cat.breed = nBreed;
    this.cat.size = nSize;
  },

  feed: function (eaten) {
    this.hungry = eaten;
  },

  birthday: function (num) {
    this.age += num;
  },
};

console.log("Cat info: ", cat);

cat.feed;

console.log("Cat after feeding: ", cat);

cat.birthday;

console.log("Cat after birthday: ", cat);
