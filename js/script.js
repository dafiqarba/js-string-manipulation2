"use strict";

let button = document.querySelector(".input-button");
let displayOutput1 = document.querySelector(".out1");
let displayOutput2 = document.querySelector(".out2");
let displayOutput3 = document.querySelector(".out3");
let displayOutput4 = document.querySelector(".out4");

button.addEventListener("click", () => {
  let userInput = document.querySelector(".input-text").value;

  let radioFibo = document.querySelector("#fibonacci");
  let radioOdd = document.querySelector("#ganjil");
  let radioEven = document.querySelector("#genap");
  let radioNum = document.querySelector("#angka");

  let resultOfSequence = {};
  let typeOfSequence;

  if (radioFibo.checked) {
    typeOfSequence = document.querySelector("#fibonacci").value;
    displayOutput1.textContent = replaceVowel(
      userInput,
      generateFibonacci(userInput),
      typeOfSequence
    );
  } else if (radioOdd.checked) {
    typeOfSequence = document.querySelector("#ganjil").value;
    displayOutput2.textContent = replaceVowel(userInput, generateOdd(userInput), typeOfSequence);
  } else if (radioEven.checked) {
    typeOfSequence = document.querySelector("#genap").value;
    displayOutput3.textContent = replaceVowel(userInput, generateEven(userInput), typeOfSequence);
  } else if (radioNum.checked) {
    typeOfSequence = document.querySelector("#angka").value;
    displayOutput4.textContent = replaceVowel(
      userInput,
      generateNumber(userInput),
      typeOfSequence,
      generateAlphabet(userInput)
    );
  }

  console.log(resultOfSequence);

  function checkChar(string) {
    return string.trim().split(" ").join("").length;
  }

  function checkTotalVowels(string) {
    let vowels = "aiueoAIUEO";
    let count = 0;

    for (let i = 0; i < string.length; i++) {
      if (vowels.includes(string[i])) {
        count++;
      }
    }
    return count;
  }

  function generateFibonacci(string) {
    let fibonacciNum = [0];
    let previousNumber = 1;
    let presentNumber = 0;
    let sum = 0;
    let vowelCount = checkTotalVowels(string);

    for (let i = 0; i <= vowelCount - 2; i++) {
      sum = previousNumber + presentNumber;
      previousNumber = presentNumber;
      presentNumber = sum;
      fibonacciNum.push(sum);
    }
    // resultOfSequence.push({ fibonacciSequence: fibonacciNum });
    resultOfSequence.fibonacciSequence = fibonacciNum;
    return resultOfSequence;
  }

  function generateEven(string) {
    let vowelCount = checkTotalVowels(string);
    let evenNumber = [];

    for (let i = 2; i <= 2 * vowelCount; i++) {
      if (i % 2 == 0) {
        evenNumber.push(i);
      }
    }
    resultOfSequence.evenSequence = evenNumber;
    return resultOfSequence;
  }

  function generateOdd(string) {
    let vowelCount = checkTotalVowels(string);
    let oddNumber = [];

    for (let i = 1; i <= 2 * vowelCount; i++) {
      if (i % 2 != 0) {
        oddNumber.push(i);
      }
    }
    resultOfSequence.oddSequence = oddNumber;
    return resultOfSequence;
  }

  function generateNumber(string) {
    let totalChar = checkTotalVowels(string) / 2;
    let numSequence = [];

    for (let i = 1; i <= totalChar; i++) {
      numSequence.push(i);
    }
    resultOfSequence.numSequence = numSequence;
    return resultOfSequence;
  }
  function generateAlphabet(string) {
    let alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let alpSequence = [];
    let totalChar = checkTotalVowels(string) / 2;

    for (let i = 0; i <= totalChar - 1; i++) {
      alpSequence.push(alphabet[i]);
    }
    resultOfSequence.alpSequence = alpSequence;
    return resultOfSequence;
  }

  function replaceVowel(string, sequence, typeOfSequence, sequenceAlph) {
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

  /* 
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
});
/*

buat function untuk menampung bilangan dibawah sepanjang n
1. fibonacci
2. ganjil
3. genap
4. angka huruf (1a2b3c...)

simpan hasilnya dalam sebuah objeck dan akan digunakan untuk mengisi kalimat pada tugas sebelumnya

tugas sebelumnya huruf vokal diganti dengan fibonacci
tugas kali ini huruf vokal diganti denga ke 4 deret diatas.

user bisa memilih, misal menggunakan radio button.. deret mana yg akan menggantikan huruf fokal

*/
