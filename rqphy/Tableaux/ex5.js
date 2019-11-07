let table = [];
for (let i = 0; i < 10; i++) {
  table.push(Math.round(Math.random() * 10));
}
console.log(table);

let table1 = [];
for (let i = 0; i < 10; i++) {
  table1.push(Math.round(Math.random() * 10));
}
console.log(table1);

let tableConcat = table.concat(table1);
console.log(tableConcat);
