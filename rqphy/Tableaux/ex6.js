function generateTable(X) {
  let table = [];
  for (let i = 0; i < X; i++) {
    table.push(Math.round(Math.random() * 10));
  }
  console.log(table);
}
generateTable(12);
