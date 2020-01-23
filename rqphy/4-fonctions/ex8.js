//8 - Ecrire une fonction qui prend en entrée un chiffre compris entre 2 et 12 et qui affiche toutes les combinaisons possibles de faire le résultat via deux dés à 6 faces
// function dice(n) {
//   for (let dice1 = 1; dice1 <= 6; dice1++) {
//     for (let dice2 = 1; dice2 <= 6; dice2++) {
//       if (dice1 + dice2 === n) {
//         console.log(dice1 + "+" + dice2);
//       }
//     }
//   }
// }
// dice(6);

function dice(n) {
  for (let dice1 = 1; dice1 <= 19; dice1++) {
    for (let dice2 = 1; dice2 <= 19; dice2++) {
      for (let dice3 = 1; dice3 <= 19; dice3++) {
        for (let dice4 = 1; dice4 <= 19; dice4++) {
          for (let dice5 = 1; dice5 <= 19; dice5++) {
            if (dice1 + dice2 + dice3 + dice4 + dice5 === n) {
              console.log(
                dice1 + "+" + dice2 + "+" + dice3 + "+" + dice4 + "+" + dice5
              );
            }
          }
        }
      }
    }
  }
}
dice(38);
