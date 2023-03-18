// Exercise 1
//1. Write function to check if number is even, fn(2) -> true, fn(3) -> false

function checkEvenNumber(num) {
  if (num === 0 || typeof num === "number") return false;
  else if (num % 2 === 0) return true;
  else return false;
}

// Test case:
console.log(checkEvenNumber(21));
console.log(checkEvenNumber(18));
console.log(checkEvenNumber(0));
console.log(checkEvenNumber("evondev"));

// Exercise 2
// 2. Write function to convert string to prefix string, example: fn('i love to learn javascript', '_') -> i_love_to_learn_javascript

function convertToPrefix(str, prefix) {
  const prefixStr = str.split(" ").join(prefix);
  return prefixStr;
}

// Test case:
console.log(convertToPrefix("I love coding", "_"));

// Exercise 3
// 3. Write function to calculate age, example: fn(1994) -> 29

function calculateAge(calenderYear, birthYear) {
  if (calenderYear > birthYear) {
    return calenderYear - birthYear;
  } else return -1; // Không tính tuổi được
}

// Test case
console.log(calculateAge(2023, 2000));

// Exercise 4
// 4. Write any function using closure

const middleName = "Thanh";
function showName(firstName, lastName) {
  const nameIntro = "Your name is ";

  function makeFullName() {
    return nameIntro + firstName + " " + middleName + " " + lastName;
  }

  return makeFullName();
}

// Test casse
console.log(showName("Trần", "Lâm"));

// Exercise 5
// 5. Write function sum of three numbers, fn(a,b,c)

function sumNumbers(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return null;
  }
  return a + b + c;
}

// Test case
console.log(sumNumbers(100, -5, 2));

// Exercise 6
// 6. Write function to get random number from 0 to 1000, example: fn() -> 321

function randomNumber() {
  return Math.floor(Math.random() * 1000);
}

// Test case
console.log(randomNumber());

// Exercise 7
// 7. Write function to truncate a string, example: fn(str, limit, prefix) -> fn('evondev', 2, '...') -> ev...

function truncateString(str, limit, prefix) {
  const sliceStr = str.slice(0, limit); // Tại sao chỗ này nó lại lấy phía sau giá trị limit nhỉ
  return sliceStr + prefix;
}

// Test case
console.log(truncateString("12345678", 2, "..."));

// Exercise 8
// 8. Write function return typeof value, fn('evondev') -> string

function checkType(value) {
  return typeof value;
}

// Test case
console.log(checkType("Lam dep trai"));
console.log(checkType(1));
console.log(checkType(null));

// Exercise 9
// 9. Write function to check if str includes word, fn("evondev", vonz) -> false

function checkSubString(str, subStr) {
  if (str.includes(subStr)) return true;
  else return false;
}

// Test case
console.log(checkSubString("EvonDev", "Evon"));
console.log(checkSubString("Tran Thanh Lam", "Anh Tuan Dep Trai"));
