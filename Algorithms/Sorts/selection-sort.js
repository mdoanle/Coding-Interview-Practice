const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;
  for(let i = 0 ; i < length; i++){
    for(let j = 0; j < length; j++){
      let smallest;
      if(array[j] < smallest){
        smallest = array[j];
      }
      smallest = array[i];
    }
  }
}

selectionSort(numbers);