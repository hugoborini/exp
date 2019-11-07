var nb1 = 1;
var nb2 = 1;
var i = 0;
somme = 0;

while (i < 20 - 1) {
  i = i + 1;
  somme = nb1 + nb2;
  nb1 = nb2;
  nb2 = somme;
  console.log(somme);
}
