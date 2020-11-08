/*
==========================================
Assignment_4: Program 1
Author: Devin Davis
Date: November 7th, 2020
File: app.js
===========================================
*/

const readlineSync = require("readline-sync");
// const questions = require("./data/questions");
const fs = require("fs")
const util = require("util")

util.promisify()

const text = readlineSync.question("Give me some text!")

fs.writeFile("./newText.txt", text, (contents) => {
console.log(contents)
});

const processTextFile = (filePath, func) => {
  fs.readFile(filePath, "utf8", (err, contents) => {
    if(!err) {
      func(contents)
    } else {
      console.log(err)
    }
  });
}

const convertToArr = (text) => {
  return text.split(" ")
}

const convertToUpperCase = () => {

}

const addLineNumbers = () => {

}

const ommitLine = () => {

}

// processTextFile("bacon.txt", (contents) => {
//   let textArr = convertToArr(contents)


// })

// log an input error to console
const logInputErr =(err) => {
  console.log(`\n\n${chalk.red(err)}`);
}

// function validate anwser type
const validateType = (anwser, expectType) => {
  if (expectType === "number") {
    return isNaN(anwser);
  }

  if (expectType === "string") {
    return isNaN(anwser.match(/(\d+)/));
  }
};




// /**
//  *   @param {object} question a single question 
//  */
// // function - ask question
// const askQuestion = (question) => {
//   let anwser = readlineSync.question(question.name);
//   if(anwser.toLocaleLowerCase() === "quit") {
//     console.clear()
//     process.exit()
//   }
//   return anwser;
// };

// /**
//  *   @param {array} questions Array of questions
//  */

// // function ask a set of questions
// const askQuestions = (questions, func) => {
//   let anwsers = {}
//   questions.forEach((q) => {
//     let anwser = askQuestion(q);
   
//     // check if no anwser was provided
//    while(anwser === "") {
//     logInputErr("0 is not an anwser!")
//     anwser = askQuestion(q)
//    }

//     // check if string was provided
//    if(q.type === "string")
//    while(validateType(anwser, "string")) {
//      logInputErr("That is not an string!")
//     anwser = askQuestion(q)
//    }
 
//    anwsers[q.propName] = anwser
//   });
//   func(anwsers);
//   askQuestions(questions, logResults)
// };


// // log output to console
// askQuestions(questions, logResults)