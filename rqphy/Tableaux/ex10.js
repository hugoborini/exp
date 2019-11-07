let table = [];
for (let i = 0; i < 10; i++) {
  table.push(Math.round(Math.random() * 10));
}
console.log(table);

table.sort(function compare(x, y) {
  return x - y;
});
console.log(table);
