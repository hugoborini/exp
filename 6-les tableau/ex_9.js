function verif_tab(tab, x) {
  var i = 0;
  while (i < tab.length) {
    if (tab[i] != x) {
      i++;
    } else {
      console.log("oui");
      return 0;
    }
  }
}
verif_tab([1, 3, 4, 3, 5, 4, 5], 4);
