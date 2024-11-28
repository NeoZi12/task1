const num = 30;

console.log(
  Number(num % 2 === 0 || num % 3 === 0 || num % 5 === 0) ||
    Number(
      (num % 2 === 0 && num % 3 === 0) ||
        (num % 3 === 0 && num % 5 === 0) ||
        (num % 2 === 0 && num % 5 === 0)
    ) + 1 ||
    Number(num % 2 === 0 && num % 3 === 0 && num % 5 === 0) + 2
);
