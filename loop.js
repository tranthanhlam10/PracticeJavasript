// 1. Write a method that creates a new array with given values: input: (3, 'a') -> ['a','a','a']
function createNewArray(a, char) {
  const newArr = [];
  for (let index = 0; index < a; index++) {
    newArr.push(char);
  }
  return newArr;
}

console.log(createNewArray(3, "a"));
// 2. Write a method that reverts input array: input: [1,2,3] -> results: [3,2,1]
function revertsArray(arr) {
  return arr.reverse();
}
console.log(revertsArray([1, 2, 3]));
// 3. Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null: input: [0, 1, false, 2, undefined, '', 3, null] => results: [1, 2, 3]
function clearUnecessaryElenmentForArr(arr) {
  const newArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (
      (typeof arr[index] == "number" && arr[index] !== 0) ||
      (typeof arr[index] == "string" && arr[index] !== "")
    ) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

console.log(
  clearUnecessaryElenmentForArr([
    0,
    1,
    false,
    2,
    undefined,
    "",
    3,
    null,
    "Trần Thanh Lâm",
    true,
  ])
);
// 4.Write a method that returns an array without listed values: without(array, value) -> without([1,2,3,1,5,7,1], 1) -> [2,3,5,7]
function deleteElementInArr(arr, value) {
  return arr.filter((x) => x !== value);
}

console.log(deleteElementInArr([1, 2, 3, 1, 5, 7, 1], 1));

// 5. Write a method that returns a duplicate-free array: input: [1, 2, 3, 1, 2] => results: [1, 2, 3]
function duplicateFreeArray(arr) {
  return [...Set(arr)];
}

console.log([1, 2, 3, 1, 2]);

// 6. Write a method that splits an array into parts of determined size(chunk(array, size)): input: chunk([1, 2, 3, 4, 5], 2) => results: [[1, 2], [3, 4], [5]],
function chuckArr(arr, n) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += n) {
    const chunk = arr.slice(i, i + n);
    newArr.push(chunk);
  }
  return newArr;
}

console.log(chuckArr([1, 2, 3, 4, 5], 2));
// 7. Write a method that creates an array of unique values that are included in all given arrays: intersection(arr1, arr2) -> intersection([1, 2], [2, 3]) => [2]
function findSameElementInDifferentArr(arr1, arr2) {
  const uniqueArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        uniqueArr.unshift(arr1[i]);
      }
    }
  }
  return uniqueArr;
}

console.log(findSameElementInDifferentArr([1, 2], [2, 3]));

// CÁC BÀI SAU YÊU CẦU VIẾT JS CODE CHỨ KHÔNG VIẾT HÀM ?

// 8. Write a JS code to print Even numbers in given array: input [13,23,12,45,22,48,66,100] -> [12,22,48,66,100]
{
  // Bài toán này yêu cầu in số chẵn trrong mảng, nên em console log ra luôn.
  const arr8 = [13, 23, 12, 45, 22, 48, 66, 100];
  for (let index = 0; index < arr8.length; index++) {
    if (arr8[index] % 2 === 0) console.log("Even numbers:" + arr8[index]);
  }
}
// 9. Write a JS code to delete all occurrence of element in given array: deleteElement([23,56,4,78,5,63,45,210,56], 56) -> results: [[23, 4, 78, 5, 63, 45, 210]]
{
  let arr9 = [23, 56, 4, 78, 5, 63, 45, 210, 56];
  console.log(arr9.filter((x) => x !== 56));
}
// 10. Write a JS code to find the largest number in an array: input [2, 45, 3, 67, 34, 567, 34, 345, 123] -> result: 567
{
  const arr10 = [2, 45, 3, 67, 34, 567, 34, 345, 123];
  let maxValue = 0;
  for (let j = 0; j < arr10.length; j++) {
    if (maxValue < arr10[j]) {
      maxValue = arr10[j];
    }
  }
  console.log(maxValue);
}
// 11. Write a JS code to find duplicate values in a given array: input [4,2,34,4,1,12,1,4] -> results: [4, 1]
// Bài này làm chưa êm lắm
{
  const arr11 = [4, 2, 34, 4, 1, 12, 1, 4];
  const newArr = [];
  const result = [];
  for (let i = 0; i < arr11.length; i++) {
    let exists = false;
    for (j = 0; j < newArr.length; j++) {
      if (arr11[i] === newArr[j]) {
        exists = true;
        result.push(arr11[i]);
        break;
      }
    }
    if (!exists) {
      newArr.push(arr11[i]);
    }
  }
  console.log(result);
}
