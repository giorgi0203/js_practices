var arr = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < arr[i]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
// arr.sort((a, b) => a < b);
console.log(arr);
