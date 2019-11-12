//4 - Faire un programme qui prend 10 notes aléatoires et affiche affiche la moyenne des notes
var temp = 1;
var tab = [];
while (temp <= 10) {
  temp++;
  tab.push(Math.round(Math.random() * 20));
}
console.log(tab);
var somme = 0;
for (let i = 0; i < tab.length; i++) {
  somme += tab[i];
}
somme = somme / temp;
console.log(somme);
