const n = [1, 2, 3, 4, 5];

const removeElement = (arr, a) => {
  const newArr = arr.filter((el) => {
    return el !== a;
  });
  return console.log(newArr);
};

removeElement(n, 1);
