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

 TODO: First, make a constructor function, called Blob, that makes blobs.
 TODO: Next, create an instance of Blob named blob.
 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington. */
function Blob() {
  this.finishPopulation = function() {
    var time = 0;
    var consumptionRate = 1;
    var population = 1000;
    while (population > 0) {
      population = population - consumptionRate;
      consumptionRate++;
      time++;
    }
    return time;
  };
}

// Created Instance
var blob = new Blob();

// assigning it to the function finishPopulation
var hoursSpentInDowington = blob.finishPopulation(); // TODO: assign me the value of the
// above calculation (how long it took
// the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

function hoursToOoze(population, peoplePerHour) {
  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.
  var time = 0;
  while (population > 0) {
    population = population - peoplePerHour;
    peoplePerHour++;
    time++;
  }
  return time;
}

Blob.prototype.hoursToOoze = hoursToOoze;

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
    'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(blob.hoursToOoze(1, 1) === 1, '1 hour needed to eat 1 person.');
assert(blob.hoursToOoze(3, 2) === 2, '2 hour needed to eat 3 person.');
assert(blob.hoursToOoze(6, 3) === 2, '6 people means 3 hours needed.');

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: 'nuqneH', // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.
function SentientBeing(homePlanet, language) {
  this.homePlanet = homePlanet;
  this.language = language;
}

// sb is a SentientBeing object
var sayHello = function(sb) {
  // TODO: say hello prints out (console.log's) hello in the
  // language of the speaker, but returns it in the language
  // of the listener (the sb parameter above).
  // use the 'hello' object at the beginning of this exercise
  // to do the translating
  console.log(hello[this.language]);
  return hello[sb.language];
  //TODO: put this on the SentientBeing prototype
};
SentientBeing.prototype.sayHello = sayHello;

// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.
var klingon = new SentientBeing('Qo\'noS', 'klingon'); // TODO: make a klingon
var romulan = new SentientBeing('Romulus', 'romulan'); // TODO: make a romulan
var human = new SentientBeing('Earth', 'federation standard'); // TODO: make a human

assert(human.sayHello(klingon) === 'nuqneH', 'the klingon should hear nuqneH');
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert(human.sayHello(klingon) === 'nuqneH', 'the klingon should hear nuqneH');
assert(human.sayHello(romulan) === 'Jolan\'tru', 'the romulan should hear Jolan\'tru');
assert(klingon.sayHello(human) === 'hello', 'the human should hear hello');
assert(romulan.sayHello(human) === 'hello', 'the human should hear hello');
assert(romulan.sayHello(klingon) === 'nuqneH', 'the klingon should hear nuqneH');

//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max(array) {
  // TODO: return the largest number in the given array
  return Math.max.apply(null, array);
}

// TODO: write three more assertions
assert(max([1, 3, 2]) === 3, '[1,3,2]');
assert(max([2, 3, 2]) === 3, '[2,3,2]');
assert(max([1, 3, 3]) === 3, '[1,3,3]');
assert(max([1, 4, 2]) === 4, '[1,4,2]');

function variablify(string) {
  var words = string.split(' ');
  for (var i = 0; i < words.length; i++) {
    if (i === 0) {
      words[i] = words[i].toLowerCase();
    } else {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
  }
  return words.join('');
}

// TODO: write three more assertions
assert(variablify('one two three') === 'oneTwoThree', 'variablify(\'one two three\')');
assert(variablify('two three four') === 'twoThreeFour', 'variablify(\'two three four\')');
assert(variablify('four five six') === 'fourFiveSix', 'variablify(\'four five six\')');
assert(variablify('six seven eight') === 'sixSevenEight', 'variablify(\'six seven eight\')');

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//********************************************************
