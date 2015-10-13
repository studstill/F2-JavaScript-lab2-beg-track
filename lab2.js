'use strict';

/* ********************************************************
LAB 2: LOOPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js */

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

TODO: First, make a constructor function, called Blob, that makes blobs*/
function Blob(startingConsumptionRate) {

  this.startingConsumptionRate = startingConsumptionRate;
  this.currentConsumptionRate = startingConsumptionRate;
}

// TODO: Next, create an instance of Blob named blob.

var blob = new Blob(1);
// TODO: Then, use a loop to calculate how long it took the blob to finish
// with Dowington. */
var population = 1000;
var hoursCounter = 0;

while (population > 0) {
  population = population - blob.currentConsumptionRate;
  blob.currentConsumptionRate = blob.currentConsumptionRate + blob.startingConsumptionRate;
  hoursCounter++;
}

var hoursSpentInDowington = hoursCounter;
console.log(hoursSpentInDowington);

// TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

console.log(blob.startingConsumptionRate);
Blob.prototype.hoursToOoze = function hoursToOoze(population, peoplePerHour) {

// TODO: implement me based on the instructions above.
// Be sure to then assign me to the Blob's prototype.
  this.startingConsumptionRate = peoplePerHour;
  this.currentConsumptionRate = this.startingConsumptionRate;
  var hoursCounter = 0;

  while (population > 0 && this.startingConsumptionRate > 0) {
    population = population - blob.currentConsumptionRate;
    blob.currentConsumptionRate = blob.currentConsumptionRate + blob.startingConsumptionRate;
    hoursCounter++;
  }
  return hoursCounter;
};

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(blob.hoursToOoze(50, 10) === 3, 'no people means no time needed.');
assert(blob.hoursToOoze(50, 50) === 1, 'no people means no time needed.');
assert(blob.hoursToOoze(10, 0) === 0, 'everyone is safe.');
//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************
var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};
// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.
function SentientBeing(homePlanet) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.homePlanet = homePlanet;
  switch (this.homePlanet) {
    case 'Earth':
      this.languageOfTheSpeaker = 'federation standard';
    break;
    case 'Romulus':
      this.languageOfTheSpeaker = 'romulan';
    break;
    case 'Qo\'noS':
      this.languageOfTheSpeaker = 'klingon';
    break;
    default:
      this.languageOfTheSpeaker = 'federation standard';
  }
}
// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function sayHello(sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
    console.log(hello[this.languageOfTheSpeaker]);
    return hello[sb.languageOfTheSpeaker];
    //TODO: put this on the SentientBeing prototype
  };
// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.
var klingon = new SentientBeing('Qo\'noS'); // TODO: make a klingon
var romulan = new SentientBeing('Romulus'); // TODO: make a romulan
var human = new SentientBeing('Earth'); // TODO: make a human

assert(human.sayHello(klingon) === 'nuqneH', 'the klingon should hear nuqneH');
assert(human.sayHello(romulan) === 'Jolan\'tru', 'the romulan should hear Jolan\'tru');
assert(klingon.sayHello(human) === 'hello', 'the human should hear hello');
assert(klingon.sayHello(romulan) === 'Jolan\'tru', 'the romulan should hear Jolan\'tru');
assert(romulan.sayHello(klingon) === 'nuqneH', 'the klingon should hear nuqneH');
assert(romulan.sayHello(human) === 'hello', 'the human should hear hello');
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max(array) {
  // TODO: return the largest number in the given array
  var largestNumber = 0;
  for (var i = 0; i < array.length; i++) {
    if (largestNumber < array[i]) {
      largestNumber = array[i];
    }
  }
  return largestNumber;
}

// TODO: write three more assertions
assert(max([1, 3, 2]) === 3, '[1,3,2]');

assert(max([4, 3, 2565, 43]) === 2565, '[4,3,2565,43]');

assert(max([90, 300, 26]) === 300, '[90,300,26]');

assert(max([908, 3, 2, 34]) === 908, '[908,3,2, 34]');

function variablify(string) {
  // TODO: you are given a string with several words in it
  // return a corresponding variable name that follows
  // javascript conventions
  // HINT:
  // you might want to use these string methods:
  //  split(), charAt(), toUpperCase()
  // and this array method: join()
  var arrayOfWords = string.split(' ');
  for (var i = 1; i < arrayOfWords.length; i++) {
    arrayOfWords[i] = arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].slice(1);
  }
  return arrayOfWords.join('');
}
// TODO: write three more assertions
assert(variablify('one two three') === 'oneTwoThree', 'variablify(\'one two three\')');
assert(variablify('myr meow myr') === 'myrMeowMyr', 'variablify(\'myr meow myr\')');
assert(variablify('cat unicorn') === 'catUnicorn', 'variablify(\'cat unicorn\')');
assert(variablify('bat') === 'bat', 'variablify(\'bat\')');
//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
