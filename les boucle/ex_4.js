var tab = [Math.floor(Math.random() * 21)];
var n = 0;
var moyenne = 0;
var somme = 0;

while (n < 9) {
  n = n + 1;
  tab.push(Math.floor(Math.random() * 20) + 1);
  console.log(tab[n]);
  somme = somme + tab[n];
}
somme = somme / 10;

console.log(tab);

console.log(somme);
