function mergeSortedArrays(arr1, arr2) {
  const arr3 = [];
  let index1 = 0;
  let index2 = 0;
  let length1 = arr1.length;
  let length2 = arr2.length;

  while(index1 < length1 && index2 < length2) {
    if(arr1[index1] > arr2[index2]) {
      arr3.push(arr2[index2])
      index2++;
    } else {
      arr3.push(arr1[index1])
      index1++;
    }
  }

  while(index1 < length1) {
    arr3.push(arr1[index1])
    index1++;
  }

  while(index2 < length2) {
    arr3.push(arr2[index2])
    index2++
  }
  console.log(arr3);
}

mergeSortedArrays([1, 3, 4, 5], [2, 4, 6, 8]);


//Input: arr1[] = { 1, 3, 4, 5}, arr2[] = {2, 4, 6, 8} 
//Output: arr3[] = {1, 2, 3, 4, 4, 5, 6, 8}