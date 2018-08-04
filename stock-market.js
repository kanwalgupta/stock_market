function maxProfit(arr) {
  var output = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if ((arr[j] - arr[i]) > output) {
        output = (arr[j] - arr[i]);
      }
    }
  }
  return output;
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));