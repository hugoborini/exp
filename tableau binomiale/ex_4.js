function somme_tab_2d(tab_2d) {
  var somme = 0;
  for (var i = 0; i < tab_2d.length; i++) {
    for (var j = 0; j < tab_2d[i].length; j++) {
      somme = somme + tab_2d[i][j];
    }
  }
  console.log(somme);
  return tab_2d;
}

somme_tab_2d([
  [1, 2, 3, 4],
  [1, 2, 4, 5, 6]
]);
