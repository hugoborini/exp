function verif_tab(tab, x) {
  var i = 0;
  while (i < tab.length) {
    if (tab[i] != x) {
      i++;
    } else {
      return 0;
    }
  }
  return 1;
}

if (verif_tab([1, 3, 4, 3, 5, 4, 5], 5) == 1) {
  console.log("non");
} else {
  verif_tab([1, 3, 4, 3, 5, 4, 5], 5);
  console.log("oui");
}
