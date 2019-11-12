//6 - Ecrire un programme qui prend un nombre et calcule la factorielle de ce nombre.
var fac = 6;
var tmp = 1;

while (fac != 0) {
  tmp = fac * tmp;
  fac = fac - 1;
}

console.log(tmp);
