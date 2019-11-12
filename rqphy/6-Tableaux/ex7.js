//7 - Créer un algorithme prenant un tableau en entrée et transformant ce même tableau sans les cases égales à 0
let table = [];
for (let i = 0; i < 10; i++) {
  table.push(Math.round(Math.random() * 10));
}
console.log(table);
function tableWithoutNul(x) {
  let table1 = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== 0) {
      table1.push(x[i]);
    }
  }
  console.log(table1);
}
tableWithoutNul(table);
