//7 - Ecrire un programme qui calcule la 20eme valeur de la suite de Fibonacci.
var nb1 = 1;
var nb2 = 1;
var i = 2;
somme = 0;

while (i < 20) {
  i = i + 1;
  somme = nb1 + nb2;
  nb1 = nb2;
  nb2 = somme;
  console.log(somme);
}
