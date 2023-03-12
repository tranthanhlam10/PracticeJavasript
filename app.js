const myName = "Trần Thanh Lâm";
console.log(myName);

// Bài tập buổi 1
// 1. Convert string to dash string
const str = "I love to learn Javascript";
// expected: "i-love-to-learn-javascript"
// 2. Truncate string to 30 characters with ...
const longStr = `Write a JavaScript function to split a string and convert it into an array of words`;
// expected: Write a JavaScript function to ...
// 3.
const newStr = `javascript is awesome`;
// expected: Javascript is awesome
// 4.
const lastStr = "evondev is awesome";
// expected: awesome is evondev

// Implements
// 1.
const dashString = str.replaceAll(" ", "-"); // Tại sao method này ở node không thể debug được.
console.log(dashString.toLowerCase()); // Ngoài ra có thể dùng split join cũng được
//2.
const acronymString = longStr.replace(
  "split a string and convert it into an array of words",
  "..."
);
console.log(acronymString);
//3
const firstUpperCharacter = newStr.toUpperCase().charAt(0);
const newUpperStr = newStr.replace(newStr.charAt(0), firstUpperCharacter);
console.log(newUpperStr);
//4
const lastStrReverse = lastStr.split(" ").reverse().join(" ");
console.log(lastStrReverse);
