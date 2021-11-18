// Enable ES6 strict mode
"use strict";

// Button element
let button = document.querySelector(".input-button");
// Output elements
let displayOutput1 = document.querySelector(".out1");
let displayOutput2 = document.querySelector(".out2");
let displayOutput3 = document.querySelector(".out3");
let displayOutput4 = document.querySelector(".out4");
// Radio elements
let radioFibo = document.querySelector("#fibonacci");
let radioOdd = document.querySelector("#ganjil");
let radioEven = document.querySelector("#genap");
let radioNum = document.querySelector("#angka");

// Click button response
button.addEventListener("click", () => {
  // Store user input string
  let userInput = document.querySelector(".input-text").value;
  // Store all sequence as key and value pair in a single object
  let resultOfSequence = {};
  // Store type of sequence (value will be updated when a radio button is selected)
  let typeOfSequence;
  // Check which radio button is selected, then execute the replaceVowel function, and display output
  if (radioFibo.checked) {
    typeOfSequence = document.querySelector("#fibonacci").value;
    displayOutput1.textContent = replaceVowel(userInput, typeOfSequence, generateFibonacci(userInput));
  } else if (radioOdd.checked) {
    typeOfSequence = document.querySelector("#ganjil").value;
    displayOutput2.textContent = replaceVowel(userInput, typeOfSequence, generateOdd(userInput));
  } else if (radioEven.checked) {
    typeOfSequence = document.querySelector("#genap").value;
    displayOutput3.textContent = replaceVowel(userInput, typeOfSequence, generateEven(userInput));
  } else if (radioNum.checked) {
    typeOfSequence = document.querySelector("#angka").value;
    displayOutput4.textContent = replaceVowel(
      userInput,
      typeOfSequence,
      generateNumber(userInput),
      generateAlphabet(userInput)
    );
  }
  // Print object to console
  console.log(resultOfSequence);

  // This function will check total vowel of a string and returns the total vowel value to the function call
  function checkTotalVowels(string) {
    let vowels = "aiueoAIUEO";
    let totalVowel = 0;

    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        totalVowel++;
      }
    }
    return totalVowel;
  }

  // This function will generate a sequence of fibonacci
  function generateFibonacci(string) {
    let fibonacciNum = [0];
    let previousNumber = 1;
    let presentNumber = 0;
    let sum = 0;
    let totalVowel = checkTotalVowels(string);

    for (let i = 0; i <= totalVowel - 2; i++) {
      sum = previousNumber + presentNumber;
      previousNumber = presentNumber;
      presentNumber = sum;
      fibonacciNum.push(sum);
    }
    resultOfSequence.fibonacciSequence = fibonacciNum;
    return resultOfSequence;
  }

  // This function will generate a sequence of even number
  function generateEven(string) {
    let totalVowel = checkTotalVowels(string);
    let evenNumber = [];

    for (let i = 2; i <= 2 * totalVowel; i++) {
      if (i % 2 == 0) {
        evenNumber.push(i);
      }
    }
    resultOfSequence.evenSequence = evenNumber;
    return resultOfSequence;
  }

  // This function will generate a sequence of odd number
  function generateOdd(string) {
    let totalVowel = checkTotalVowels(string);
    let oddNumber = [];

    for (let i = 1; i <= 2 * totalVowel; i++) {
      if (i % 2 != 0) {
        oddNumber.push(i);
      }
    }
    resultOfSequence.oddSequence = oddNumber;
    return resultOfSequence;
  }

  // This function will generate a sequence of number
  function generateNumber(string) {
    let totalVowel = checkTotalVowels(string) / 2;
    let numSequence = [];

    for (let i = 0; i <= totalVowel; i++) {
      numSequence.push(i + 1);
    }
    resultOfSequence.numSequence = numSequence;
    return resultOfSequence;
  }

  // This function will generate a sequence of alphabet
  function generateAlphabet(string) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    ];
    let alpSequence = [];
    let totalVowel = checkTotalVowels(string) / 2;

    for (let i = 0; i <= totalVowel - 1; i++) {
      alpSequence.push(alphabet[i]);
    }
    resultOfSequence.alpSequence = alpSequence;
    return resultOfSequence;
  }

  // This function will replace vowel letters of a string based on selected sequence
  function replaceVowel(string, typeOfSequence, sequence, sequenceAlph) {
    let vowels = "aiueoAIUEO";
    let arrayOfString = string.split("");
    let count = 0;
    let countNumAp = 0;
    let countNum = 0;
    let countAlp = 0;

    for (let i = 0; i < arrayOfString.length; i++) {
      if (vowels.includes(arrayOfString[i])) {
        if (typeOfSequence == "fibonacci") {
          arrayOfString[i] = sequence.fibonacciSequence[count];
          sequence.fibonacciSequence;
          count++;
        } else if (typeOfSequence == "ganjil") {
          arrayOfString[i] = sequence.oddSequence[count];
          count++;
        } else if (typeOfSequence == "genap") {
          arrayOfString[i] = sequence.evenSequence[count];
          count++;
        } else if (typeOfSequence == "angka") {
          if (countNumAp % 2 == 0) {
            arrayOfString[i] = sequence.numSequence[countNum];
            countNum++;
          } else {
            arrayOfString[i] = sequenceAlph.alpSequence[countAlp];
            countAlp++;
          }
          countNumAp++;
        }
      }
    }
    return arrayOfString.join("");
  }
});

/* 
  This function is able to insert sequence of number before each letter of a string

  function replaceNumber(string, sequence, typeOfSequence) {
    let arrayOfString = string.split("");
    let numCount = 0;

    if (typeOfSequence == "angka") {
      for (let i = 0; i < arrayOfString.length; i++) {
        if (arrayOfString[i] == " ") {
          arrayOfString[i] == " ";
        } else {
          arrayOfString[i] = sequence.numSequence[numCount] + arrayOfString[i];
          numCount++;
        }
      }
    }
    return arrayOfString.join("");
  } */
