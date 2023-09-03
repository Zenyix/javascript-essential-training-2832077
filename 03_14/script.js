/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const sherlock = new Book(
  "Sherlock Holmes",
  "Sir Conan Doyle",
  "England",
  false,
  10.0,
  "12345"
);

const deathnote = new Book(
  "Deathnote",
  "Light Yagami",
  "Shinigami",
  true,
  5.0,
  "0000B"
);

const preamble = new Book(
  "The Preamble of Newton's Third Law",
  "Some Nerd",
  "Buncha Nerds",
  false,
  100.0,
  "AB12CD34"
);

const war = new Book(
  "War of the Worlds",
  "Guy who wrote it",
  "Company that published it",
  true,
  20.0,
  "12323"
);

console.log("Available Books: ", sherlock, deathnote, preamble, war);
