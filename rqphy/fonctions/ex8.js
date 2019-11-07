function dice(n) {
  for (let dice1 = 1; dice1 <= 6; dice1++) {
    for (let dice2 = 1; dice2 <= 6; dice2++) {
      if (dice1 + dice2 === n) {
        console.log(dice1 + "+" + dice2);
      }
    }
  }
}
dice(6);
