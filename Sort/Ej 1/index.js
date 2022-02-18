arr = [9, 2, 6, 1, 4, 3, 8, 7];
console.log(arr);
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let a = 0; a < array.length; a++) {
      if (arr[a] > arr[a + 1]) {
        let pos = arr[a];
        arr[a] = arr[a + 1];
        arr[a + 1] = pos;
      }
    }
  }
};
bubbleSort(arr);
console.log(arr);
