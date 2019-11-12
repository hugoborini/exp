//10- Créer un algorithme prenant en entrée un tableau et affichant ce même tableau mais triée par ordre croissant
/*let table = [];
for (let i = 0; i < 10; i++) {
  table.push(Math.round(Math.random() * 10));
}
console.log(table);

table.sort(function compare(x, y) {
  return x - y;
});
console.log(table);*/

let table = [];
for (let i = 0; i < 100; i++) {
  table.push(Math.round(Math.random() * 100));
}
console.log(table);

let newTable = [];
while (table.length > 0) {
  var min = Math.min.apply(Math, table);
  newTable.push(min);
  table.splice(table.indexOf(min), 1);
}
console.log(newTable);
