// recursively obtain the factorial of a given integer
function factorial(x) {
  if (x < 0) return; // Do Not run into the negatives
  if (x === 0) return 1; // 0 is not an accepted value for a factorial
  return x * factorial(x - 1); // the meat
}