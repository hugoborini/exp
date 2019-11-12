//6 - Créer un algorithme prenant un entier X en paramètre et créant un tableau de X valeurs aléatoires
function generateTable(X) {
  let table = [];
  for (let i = 0; i < X; i++) {
    table.push(Math.round(Math.random() * 10));
  }
  console.log(table);
}
generateTable(12);
