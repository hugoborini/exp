//9 - Créer un algorithme prenant un entier et un tableau en paramètres qui affiche oui ou non cet entier est présent dans ce tableau
let table = [];
for (let i = 0; i < 10; i++) {
  table.push(Math.round(Math.random() * 10));
}
console.log(table);

function readTable(nomber, array) {
  if (array.indexOf(nomber) === -1) {
    console.log("non");
  } else {
    console.log("oui");
    return 0;
  }
}
readTable(3, table);
