const num = 30;

// a
((num % 2 == 0 || num % 3 == 0 || num % 5 == 0) && console.log("1")) ||
  // b
  (num % 2 == 0 && num % 3 == 0) ||
  (num % 3 == 0 && num % 5 == 0) ||
  (num % 2 == 0 && num % 5 == 0 && console.log("2")) ||
  //c
  (num % 2 == 0 && num % 3 == 0 && num % 5 == 0 && console.log("3"));
