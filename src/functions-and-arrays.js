// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(num1, num2) {
    let max;
    if (num1 > num2) {
        max = num1;
    }else if (num1 < num2) {
        max = num2;
    }else {
        max = num1;
    }
    return max;
}

console.log (maxOfTwoNumbers(1, 4));



// Iteration 2 | Find the Longest Word

const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayOfWords) {
    let longestWord = "";

    if (arrayOfWords.length === 0) {
        return null;
    }

    for (let i = 0; i < arrayOfWords.length; i++ ) {
        if (arrayOfWords[i].length > longestWord.length) {
            longestWord = arrayOfWords[i];
        } else if (arrayOfWords[i].length === longestWord.length ) {
            continue;
            //longestWord = arrayOfWords[i];
        }
    }
    return longestWord;
}
console.log (findLongestWord(words));



// Iteration 3 | Sum Numbers

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
    let totalSum = 0;

    if (arrayOfNumbers.length === 0) {
        return 0;
    }else if (arrayOfNumbers.length === 1) {
        return arrayOfNumbers[0];
    }


    for (let i = 0; i < arrayOfNumbers.length; i++) {
        totalSum += arrayOfNumbers[i];
    }

    return totalSum;
}

console.log (sumNumbers(numbers));


// Iteration 4 | Numbers Average

const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(NumbersArray) {
    
    if (NumbersArray.length === 0) {
        return 0;
    }
    
    let sum = sumNumbers(NumbersArray);
    let averageOfNumbers = sum /NumbersArray.length;

    return averageOfNumbers;

}

console.log (averageNumbers(numbers2));


// Iteration 5 | Find Elements

const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, wordToSearch) {
    if (wordsArray.length === 0) {
        return null;
    }

    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] === wordToSearch ) {
            return true;
        }
    }

    return false;
}

console.log (doesWordExist(words2, "tomato"));