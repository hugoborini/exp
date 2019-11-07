let table = [];
for (let i = 0; i < 10; i++) {
  table.push(Math.round(Math.random() * 10));
}
console.log(table);
let temp = 0;
function bigger(x) {
  for (let i = 0; i < x.length; i++) {
    if (temp < x[i]) {
      temp = x[i];
    }
  }
  console.log(temp);
}

bigger(table);
