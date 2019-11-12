function check_nbr(tab_2d, nbr) {
  var j = 0;
  for (var i = 0; i < tab_2d.length; i++) {
    while (j < tab_2d[i].length) {
      if (nbr != tab_2d[i][j]) {
        j++;
      } else {
        return 0;
      }
    }
  }
  return 1;
}

var tab_2d = [
  [1, 2, 3, 4, 5],
  [3, 2, 5, 6, 4],
  [2, 4, 5, 34, 2]
];

if (check_nbr(tab_2d, 2) == 1) {
  console.log("non");
} else {
  console.log("oui");
}
