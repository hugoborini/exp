//3 - Calculer la factorielle d’un nombre via une fonction récursive
function fact(n) {
  if (n > 0) {
    return fact(n - 1) * n;
  } else {
    return 1;
  }
}
let test = fact(5);
console.log(test);
