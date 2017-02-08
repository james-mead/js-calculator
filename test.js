function calculate () {
  var entry = "1*2+3/4";
  var result = eval(entry);
  console.log(result)
  var arr = entry.split(/(\D)/g);
  // console.log(arr)
  var sum = 0
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
    var number = parseInt(arr[i])
    // console.log(number)
    sum += number
  }
  console.log(sum)
}


calculate()
