function removeElement(array, item) {
    index = array.indexOf(item);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
  array = [1,2,3,4,4,5,6,6,76,4];
  removeElement(array, 76);
  console.log(array);