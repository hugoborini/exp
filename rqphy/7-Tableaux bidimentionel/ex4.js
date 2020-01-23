//4 - Créer une fonction qui calcule la somme des valeurs de toutes les cases d’un tableau bidimensionnel

function sum(array) {
  let summ = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      summ = summ + array[i][j];
    }
  }
  return summ;
}

let result = sum([
  [3, 4, 1, 2],
  [4, 3, 5, 6],
  [6, 4, 5, 3]
]);
console.log(result);

function coucou(nb) {
  console.log("coucou");
  if (nb > 0) {
    coucou(nb - 1);
  }
}

2 ^ 4;
(2 * 2) ^ 3;
(2 * 2 * 2) ^ 2;
