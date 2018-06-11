//CRUD
var arr = ['A', 'B', 'C', 12, true];
console.log(arr[0]); // A

arr[2] = 3;
console.log(arr); // [ 'A', 'B', 3, 12, true ]
console.log(arr.length); // 5

arr.push('E');
console.log(arr); // [ 'A', 'B', 3, 12, true, 'E' ]
