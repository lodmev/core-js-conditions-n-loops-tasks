/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let result = false;
  if (queen.x === king.x || queen.y === king.y) {
    result = true;
  } else if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
    result = true;
  }
  return result;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b <= c || b + c <= a) {
    return false;
  }
  if (a === b || a === c || b === c) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let romanNum = '';
  const tens = Math.floor(num / 10);
  const ones = num % 10;
  for (let i = 0; i < tens; i += 1) {
    romanNum += 'X';
  }
  if (ones === 9) {
    romanNum += 'IX';
    return romanNum;
  }
  const fives = Math.floor(ones / 5);
  if (fives > 0) {
    romanNum += 'V';
  } else if (ones === 4) {
    romanNum += 'IV';
    return romanNum;
  }
  const remainingOnes = ones - 5 * fives;
  for (let i = 0; i < remainingOnes; i += 1) {
    romanNum += 'I';
  }
  return romanNum;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
        result += 'zero';
        break;
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      case '.':
        result += 'point';
        break;
      case ',':
        result += 'point';
        break;
      case '-':
        result += 'minus';
        break;
      default:
    }
    if (i !== numberStr.length - 1) {
      result += ' ';
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const middle = Math.floor(str.length / 2);
  for (let i = 0; i < middle; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let number = num;
  while (number > 0) {
    if (number === digit || number % 10 === digit) {
      return true;
    }
    number = Math.floor(number / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let sumLeft = 0;
    let sumRight = 0;
    for (let j = 0; j < i; j += 1) {
      sumLeft += arr[j];
    }
    for (let k = i + 1; k < arr.length; k += 1) {
      sumRight += arr[k];
    }
    if (sumLeft === sumRight) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const autoIncrement = () => {
    let count = 0;
    return () => {
      count += 1;
      return count;
    };
  };
  const result = [];
  for (let i = 0; i < size; i += 1) {
    result[i] = [];
  }
  let direction = 1;
  let matrixTop = 0;
  let matrixBottom = size - 1;
  let matrixLeft = 0;
  let matrixRight = size - 1;
  const counter = autoIncrement();
  while (matrixTop <= matrixBottom && matrixLeft <= matrixRight) {
    if (direction === 1) {
      for (let i = matrixLeft; i <= matrixRight; i += 1) {
        result[matrixTop][i] = counter();
      }
      matrixTop += 1;
      direction = 2;
    }
    if (direction === 2) {
      for (let i = matrixTop; i <= matrixBottom; i += 1) {
        result[i][matrixRight] = counter();
      }
      matrixRight -= 1;
      direction = 3;
    }
    if (direction === 3) {
      for (let i = matrixRight; i >= matrixLeft; i -= 1) {
        result[matrixBottom][i] = counter();
      }
      matrixBottom -= 1;
      direction = 4;
    }
    if (direction === 4) {
      for (let i = matrixBottom; i >= matrixTop; i -= 1) {
        result[i][matrixLeft] = counter();
      }
      matrixLeft += 1;
      direction = 1;
    }
  }
  return result;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const inputMatrix = matrix;
  for (let i = 0; i < inputMatrix.length; i += 1) {
    for (let j = i; j < inputMatrix.length; j += 1) {
      const temp = inputMatrix[i][j];
      inputMatrix[i][j] = inputMatrix[j][i];
      inputMatrix[j][i] = temp;
    }
    let left = 0;
    let right = inputMatrix.length - 1;
    while (left < right) {
      const tmp = inputMatrix[i][right];
      inputMatrix[i][right] = inputMatrix[i][left];
      inputMatrix[i][left] = tmp;
      left += 1;
      right -= 1;
    }
  }
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function quickSort(arr, left, right) {
  const middle = Math.floor((left + right) / 2);
  const pivot = arr[middle];
  let i = left;
  let j = right;
  while (i <= j) {
    while (arr[i] < pivot) {
      i += 1;
    }
    while (arr[j] > pivot) {
      j -= 1;
    }
    if (i >= j) {
      break;
    }
    const temp = arr[i];
    const array = arr;
    array[i] = arr[j];
    array[j] = temp;
    i += 1;
    j -= 1;
  }
  if (left < right) {
    quickSort(arr, left, j);
    quickSort(arr, j + 1, right);
  }
}
function sortByAsc(arr) {
  quickSort(arr, 0, arr.length - 1);
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let res = str;
  const cache = new Map();
  function shuffle(inStr) {
    if (cache.has(inStr)) {
      return cache.get(inStr);
    }
    let preRes = inStr[0];
    for (let i = 2; i < inStr.length; i += 2) {
      preRes += inStr[i];
    }
    for (let i = 1; i < inStr.length; i += 2) {
      preRes += inStr[i];
    }
    cache.set(inStr, preRes);
    return preRes;
  }
  for (let i = 0; i < iterations; i += 1) {
    res = shuffle(res);
  }
  return res;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  if (Math.floor(number / 10) === 0) {
    return number;
  }
  function numToArray() {
    let num = number;
    const res = [];
    while (num > 0) {
      res.push(num % 10);
      num = Math.floor(num / 10);
    }
    return res.reverse();
  }
  function arrayToNum(arr) {
    const num = arr.reduce(
      (acc, n, idx) => acc + n * 10 ** (arr.length - 1 - idx),
      0
    );
    return num;
  }
  const digits = numToArray();
  for (let i = digits.length - 1; i > 1; i -= 1) {
    if (digits[i] > digits[i - 1]) {
      quickSort(digits, i, digits.length - 1);
      for (let j = i; j < digits.length; j += 1) {
        if (digits[j] > digits[i - 1]) {
          const tmp = digits[j];
          digits[j] = digits[i - 1];
          digits[i - 1] = tmp;
          return arrayToNum(digits);
        }
      }
    }
  }
  return number;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
