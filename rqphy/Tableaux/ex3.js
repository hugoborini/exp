//3 - Créer un algorithme créant un tableau de 10 cases avec dix valeurs aléatoires
let table = [];
for (let i = 0; i < 10; i++) {
  table.push(Math.round(Math.random() * 10));
}
console.log(table);
