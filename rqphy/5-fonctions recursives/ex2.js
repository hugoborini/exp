//2 - Recréer la fonction calculant la puissance via une fonction récursive
function power(n, p) {
  let memo = n;
  if (p > 0) {
    n = n * memo;
    power(n, p - 1);
  }
  console.log(n);
}

power(2, 8);

function p(n, p) {
  if (p === 0) {
    return 1;
  } else {
    return n * p(n, p - 1);
  }
}
