"use strict";

let button = document.querySelector(".input-button");
let displayOutput = document.querySelector(".text-output");

button.addEventListener("click", () => {
  let userInput = document.querySelector(".input-text").value;

  let radioFibo = document.querySelector("#fibonacci");
  let radioOdd = document.querySelector("#ganjil");
  let radioEven = document.querySelector("#genap");
  let radioNum = document.querySelector("#angka");

  let resultOfSequence = [];
  let typeOfSequence;

  if (radioFibo.checked) {
    typeOfSequence = document.querySelector("#fibonacci").value;
    displayOutput.textContent = replaceVowel(
      userInput,
      generateFibonacci(userInput),
      typeOfSequence
    );
  } else if (radioOdd.checked) {
    typeOfSequence = document.querySelector("#ganjil").value;
    displayOutput.textContent = replaceVowel(userInput, generateOdd(userInput), typeOfSequence);
  } else if (radioEven.checked) {
    typeOfSequence = document.querySelector("#genap").value;
    displayOutput.textContent = replaceVowel(userInput, generateEven(userInput), typeOfSequence);
  } else if (radioNum.checked) {
    typeOfSequence = document.querySelector("#angka").value;
    displayOutput.textContent = replaceNumber(userInput, generateNumber(userInput), typeOfSequence);
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
    resultOfSequence.push({ fibonacciSequence: fibonacciNum });
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
    resultOfSequence.push({ evenSequence: evenNumber });
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
    resultOfSequence.push({ oddSequence: oddNumber });
    return resultOfSequence;
  }

  function generateNumber(string) {
    let totalChar = checkChar(string);
    let numSequence = [];

    for (let i = 1; i < totalChar + 1; i++) {
      numSequence.push(i);
    }
    resultOfSequence.push({ numSequence: numSequence });
    return resultOfSequence;
  }

  function replaceVowel(string, sequence, typeOfSequence) {
    let vowels = "aiueoAIUEO";
    let arrayOfString = string.split("");
    let count = 0;

    for (let i = 0; i < arrayOfString.length; i++) {
      if (vowels.includes(arrayOfString[i])) {
        if (typeOfSequence == "fibonacci") {
          arrayOfString[i] = sequence[0].fibonacciSequence[count];
          count++;
        } else if (typeOfSequence == "ganjil") {
          arrayOfString[i] = sequence[0].oddSequence[count];
          count++;
        } else if (typeOfSequence == "genap") {
          arrayOfString[i] = sequence[0].evenSequence[count];
          count++;
        }
      }
    }

    return arrayOfString.join("");
  }

  function replaceNumber(string, sequence, typeOfSequence) {
    let arrayOfString = string.split("");
    let numCount = 0;

    if (typeOfSequence == "angka") {
      for (let i = 0; i < arrayOfString.length; i++) {
        if (arrayOfString[i] == " ") {
          arrayOfString[i] == " ";
        } else {
          arrayOfString[i] = sequence[0].numSequence[numCount] + arrayOfString[i];
          numCount++;
        }
      }
    }
    return arrayOfString.join("");
  }
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
