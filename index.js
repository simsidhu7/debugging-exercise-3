let removeDuplucates = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};
console.log(removeDuplicates([1, 1, 1, 2, 3, 4, 4, 4]));

//Soln above. Problem originally: let removeDuplicates = (array) => {
//     let newArray = {};
//     for (let i = 0; i < array.length; i++) {
//       if (newArray.indexOf(i) === false) {
//         newArray.push(i)
//       }
//     }
//     return array;
//   }
//   console.log(removeDuplicates([1, 1, 1, 2, 3, 4, 4, 4]))

//Changes:
//New array was declared as an object instead of array
//Need to add array (newArray.indexOf(array[i]))
//We want to push array[i] to append the item in teh array
//return newArray
