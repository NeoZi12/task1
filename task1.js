const num = 30;

console.log(
  ((num % 2 === 0 || num % 3 === 0 || num % 5 === 0) && 1) ||
    (((num % 2 === 0 && num % 3 === 0) ||
      (num % 3 === 0 && num % 5 === 0) ||
      (num % 2 === 0 && num % 5 === 0)) &&
      2) ||
    (num % 2 === 0 && num % 3 === 0 && num % 5 === 0 && 3)
);