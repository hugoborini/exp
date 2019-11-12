/*
let table = [];
var nombre = 10;
for (i = 0; i < nombre; i++) {
  table.push(Math.round(Math.random() * 10));
}
console.log(table);
let table2 = table;
let newTable = [];
console.log(table2);

while (newTable.length < table.length) {
  newTable.push((Math.min, table2));
  table2.indexOf[(Math.min, table2)] = 100000;
}
console.log(newTable); */

let table = [];
for (let i = 0; i < 10; i++) {
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
