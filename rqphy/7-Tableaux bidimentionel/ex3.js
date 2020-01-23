//Créer une fonction qui prend en paramètre un tableau bidimensionnel et un chiffre et qui renvoi en retour si oui ou non le chiffre est présent dans ce tabelau
function testbi(array, n) {
  let memo = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === n) {
        memo++;
        break;
      }
    }
  }
  let v = memo !== 0;
  return v;
}

let r = testbi(
  [
    [1, 4, 1, 58],
    [3, 5, 2, 5],
    [3, 52, 5, 5]
  ],
  88
);

console.log(r);
