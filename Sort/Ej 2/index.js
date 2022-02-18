let strings = ["hola", "chaus", "chancahnchanchan", "Bq"];
console.log(strings);
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let a = 0; a < array.length - 1; a++) {
      if (strings[a].length > strings[a + 1].length) {
        let pos = strings[a];
        strings[a] = strings[a + 1];
        strings[a + 1] = pos;
      }
    }
  }
};
bubbleSort(strings);
console.log(strings);
