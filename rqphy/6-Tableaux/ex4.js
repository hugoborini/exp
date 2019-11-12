//4 - Créer un algorithme calculant la moyenne des valeurs d'un tableau remplit de chiffres
let table = [];
let moyenne = 0;
for (let i = 0; i < 10; i++) {
  table.push(Math.round(Math.random() * 10));
}
console.log(table);
for (let index = 0; index < 10; index++) {
  moyenne = moyenne + table[index];
}
moyenne = moyenne / table.length;
console.log(moyenne);
